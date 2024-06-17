// Copyright (c) 2024, abc and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Student", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Student', {
    refresh: function(frm) {
        if (!frm.custom_buttons || !frm.custom_buttons.Save) {
            frm.add_custom_button(__('save'), function() {
                custom_save_function(frm);
            });
        }
    }
});

function custom_save_function(frm) {
    frm.save_or_update().then(() => {
            frappe.msgprint(__('Document saved successfully.'));
        }).catch((error) => {
            frappe.msgprint(__('Error saving document: ' + error.message));
        });
    }

    frappe.ui.form.on('Student', {
        refresh: function(frm) {
            if (frm.doc.address) {
                frappe.call({
                    method: "frappe.client.get",
                    args: {
                        doctype: "Address",
                        name: frm.doc.address
                    },
                    callback: function(r) {
                        if (r.message) {
                            let address = r.message;
                            let combined_address = `
                                <div style="border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
                                    <strong>Combined Address</strong><br><br>
                                    ${address.address_line1 || ''}<br>
                                    ${address.address_line2 || ''}<br>
                                    ${address.city || ''}, ${address.state || ''}<br>
                                    ${address.country || ''}<br>
                                    ${address.pincode || ''}
                                </div>
                            `;
                            frm.fields_dict.combined_address.$wrapper.html(combined_address);
                        }
                    }
                });
            } else {
                frm.fields_dict.combined_address.$wrapper.html('');
            }
        },
        address: function(frm) {
            if (frm.doc.address) {
                frappe.call({
                    method: "frappe.client.get",
                    args: {
                        doctype: "Address",
                        name: frm.doc.address
                    },
                    callback: function(r) {
                        if (r.message) {
                            let address = r.message;
                            let combined_address = `
                                <div style="border: 1px solid #ccc; padding: 10px; border-radius: 5px;">
                                    <strong>Combined Address</strong><br><br>
                                    ${address.address_line1 || ''}<br>
                                    ${address.address_line2 || ''}<br>
                                    ${address.city || ''}, ${address.state || ''}<br>
                                    ${address.country || ''}<br>
                                    ${address.pincode || ''}
                                </div>
                            `;
                            frm.fields_dict.combined_address.$wrapper.html(combined_address);
                        }
                    }
                });
            } else {
                frm.fields_dict.combined_address.$wrapper.html('');
            }
        }
    });
    