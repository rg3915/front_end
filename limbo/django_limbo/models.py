from django.db import models
from django.utils.translation import ugettext_lazy as _


class Person(models.Model):
    firstname = models.CharField(_('Nome'), max_length=20)
    lastname = models.CharField(_('Sobrenome'), max_length=20)
    cpf = models.CharField(_('CPF'), max_length=11)
    birthdate = models.DateTimeField(_('Nascimento'))
    email = models.EmailField(_('e-mail'), unique=True)
    phone = models.CharField(_('Fone'), max_length=18)
    blocked = models.BooleanField(_('Bloqueado'), default=False)
    created_at = models.DateTimeField(
        _('Criado em'), auto_now_add=True, auto_now=False)
    modified_at = models.DateTimeField(
        _('Modificado em'), auto_now_add=False, auto_now=True)

    class Meta:
        ordering = ['firstname']
        verbose_name = "pessoa"
        verbose_name_plural = "pessoas"

    def __str__(self):
        return u"%s %s" % (self.firstname, self.lastname)

    full_name = property(__str__)

    def get_person_detail_url(self):
        return u"/persons/%i" % self.id
