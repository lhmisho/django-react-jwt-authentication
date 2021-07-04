from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.


# class UserAccountManager(BaseUserManager):
#     def create_user(self, name, email, password=None):
#         if not email:
#             raise ValueError("User must have an email address")
#         email = self.normalize_email(email)
#         user = self.model(name=name, email=email)
#         user.set_password(password)
#         user.save()
#         return user
#
#     def create_superuser(self, email, name, password):
#         """
#         Creates and saves a superuser with the given email and password.
#         """
#         user = self.create_user(
#             name,
#             email,
#             password=password,
#         )
#         user.staff = True
#         user.admin = True
#         user.save(using=self._db)
#         return user
#
#
# class AccountsUser(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(max_length=255, unique=True)
#     name = models.CharField(max_length=255)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)
#
#     objects = UserAccountManager()
#
#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ('name', )
#
#     def get_fullname(self):
#         return self.name
#
#     def get_shortname(self):
#         return self.name
#
#     def __str__(self):
#         return self.name
