# Generated by Django 3.2.5 on 2021-07-14 15:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0004_alter_order_complete'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Order_items',
            new_name='OrderItems',
        ),
    ]