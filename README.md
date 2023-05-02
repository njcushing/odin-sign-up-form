# odin-sign-up-form

A project to practise using form controls. The form contains six inputs based around
the collection of personal information including: name, email address, phone number
and a password. Some of the fields are required and will display invalid if their
values do not satisfy the given regular expression pattern set on those input
elements.

In addition to being required fields and having a pattern that must be satisfied,
the password input values must also match each other, otherwise the primary password
input field's error message will change to reflect this, but only if it would otherwise
be valid.