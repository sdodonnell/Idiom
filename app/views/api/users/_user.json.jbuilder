json.extract! user, :id, :username, :email, :fullname;
json.profPicUrl url_for(user.profile_image) if user.profile_image.attached?
