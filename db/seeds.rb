require 'open-uri'
require_relative 'seed-stories.rb'

User.destroy_all
Story.destroy_all

aws_path = "https://s3-us-west-1.amazonaws.com/idiom-fullstack-dev/"

IMAGES = [
    aws_path + "crowds.jpg",
    aws_path + "progress.jpg",
    aws_path + "virtue.jpg",
    aws_path + "fortune.jpg",
    aws_path + "friendship.jpg",
    aws_path + "solitude.jpg",
    aws_path + "womans.jpg",
    aws_path + "anarchism.jpg"
]

demo_user = User.create({
    username: "Phaedrus",
    fullname: "Phaedrus",
    email: "phaedrus@demo.com",
    password: "deathofmemory"
})


# Create 20 users
users = [demo_user]
20.times do
    user = User.create!({
        username: Faker::Internet.username,
        fullname: Faker::Name.name,
        email: Faker::Internet.email,
        password: Faker::Internet.password(6, 10)
    })
    users << user
end

# Each user publishes 10 stories
users.each do |user|
    story = Story.create!({
        user_id: user.id,
        title: Faker.GreekPhilosophers.quote,
        body: "Body goes here",
        publish_date: Faker::Date.between(2.days.ago, Date.today)
    })
end
