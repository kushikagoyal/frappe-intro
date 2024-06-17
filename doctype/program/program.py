# Copyright (c) 2024, abc and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


# class Program(Document):
# 	pass
from frappe.model.document import Document

class Program(Document):
    def validate(self):
        self.calculate_total_credits()

    def on_update(self):
        self.calculate_total_credits()

    def calculate_total_credits(self):
        total_credits = 0
        for co in self.courses:
            print(co)
            credit=frappe.get_doc("Course",co).credits
            # number=float(credit)
            # print(number)
            print(credit)
            total_credits+=credit
            
        self.total_credits = total_credits
