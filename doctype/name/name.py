# Copyright (c) 2024, abc and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
# import frappe
# from frappe.model import default_fields


class Name(Document):
	pass

# @frappe.whitelist()
# def set_default_joining_date(doc, method):
#     if not doc.joining_date:
#         doc.joining_date = frappe.utils.today()

# def apply_default_joining_date():
#     # Apply default joining date for existing records
#     student = frappe.get_list('Student', filters={'joining_date': None}, fields=['name'])
#     for student in Student:
#         frappe.db.set_value('Student', student.name, 'joining_date', frappe.utils.today())

# # Hook to set default joining date on save
# default_fields.update_default_fields({
#     'Student': {
#         'joining_date': set_default_joining_date
#     }
# })
