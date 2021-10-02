# Generated by Django 3.0.7 on 2021-10-01 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Expense',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=200)),
                ('amount', models.FloatField()),
                ('payment_time', models.DateTimeField(null=True)),
                ('dateOfPayment', models.CharField(default='None', max_length=100, null=True)),
            ],
            options={
                'ordering': ['-payment_time'],
            },
        ),
    ]
