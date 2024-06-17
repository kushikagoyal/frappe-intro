// Copyright (c) 2024, abc and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Program", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Program', {
    start_date: function(frm) {
        calculate_duration(frm);
    },
    end_date: function(frm) {
        calculate_duration(frm);
    }
});

function calculate_duration(frm) {
    if (frm.doc.start_date && frm.doc.end_date) {
        let start_date = frappe.datetime.str_to_obj(frm.doc.start_date);
        let end_date = frappe.datetime.str_to_obj(frm.doc.end_date);

        if (start_date > end_date) {
            frappe.msgprint(__('End Date must be greater than or equal to Start Date'));
            frm.set_value('duration', 0);
            return;
        }

        let duration = frappe.datetime.get_day_diff(end_date, start_date) + 1;  
        frm.set_value('duration', duration);
    } else {
        frm.set_value('duration', 0);
    }
}

