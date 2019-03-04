@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :fullname, :username, :email
    end
end