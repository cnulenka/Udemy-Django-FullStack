from django import template

register = template.Library()

@register.filter(name='cutString')
def cut_string(value, arg):
    """
    This cuts out all values of args from the string!
    """
    return value.replace(arg,'')

#register.filter(cutString, cut_string)
