from rest_framework import exceptions, serializers
#from django.contrib.auth.models import User
from .models import User
from django.contrib.auth import authenticate
# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email','password','first_name','last_name','phone_no','address')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','email','password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        #print(validated_data['username'])
        user = User.objects.create_user(validated_data['username'],validated_data['email'],validated_data['password'])
        return user

class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()  # added missing fields for serializer
    password = serializers.CharField()
    class Meta:
        model = User
        fields = ('username','password')

    def validate(self, data):
        user = authenticate(**data)
        if user:
            
            if user.is_active:
                
                #data['user'] = user  # added user model to OrderedDict that serializer is validating
                #return data  # and in sunny day scenario, return this dict, as everything is fine
                return user
            raise exceptions.AuthenticationFailed('Account is not activated')
        raise exceptions.AuthenticationFailed()