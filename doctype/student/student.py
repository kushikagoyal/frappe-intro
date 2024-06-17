# Copyright (c) 2024, abc and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from datetime import datetime


class Student(Document):
	def before_save(self):
		self.full_name = self.first_name+self.middle_name+self.last_name 

	def validate(self):
		dob_date = datetime.strptime(self.date_of_birth, '%Y-%m-%d').date()
		today = datetime.today().date()
		age = today.year - dob_date.year
		if(age<18):
			frappe.throw("Enter a valid DOB")

		


