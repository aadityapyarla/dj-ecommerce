# Generated by Django 3.2.5 on 2021-07-15 05:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0006_alter_orderitems_quantity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderitems',
            name='quantity',
            field=models.IntegerField(default=0, null=True),
        ),
    ]