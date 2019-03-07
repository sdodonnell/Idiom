require 'open-uri'

User.destroy_all
Story.destroy_all

aws_path = "https://s3-us-west-1.amazonaws.com/idiom-fullstack-dev/"

# IMAGES = [
#     aws_path + "crowds.jpg",
#     aws_path + "progress.jpg",
#     aws_path + "virtue.jpg",
#     aws_path + "fortune.jpg",
#     aws_path + "friendship.jpg",
#     aws_path + "solitude.jpg",
#     aws_path + "womans.jpg",
#     aws_path + "anarchism.jpg"
# ]

# Select a portion of the master text
# master_text = File.readlines(File.join(Rails.root, 'db', 'texts', 'republic.txt'))
def text_selection
    master_text = File.readlines(File.join(Rails.root, 'db', 'texts', 'republic.txt'))
    slice_point = rand(master_text.length)
    selection = master_text[slice_point..slice_point + 40]
    selection.join
end

# Create demo user
demo_user = User.create({
    username: "Phaedrus",
    fullname: "Phaedrus",
    email: "phaedrus@demo.com",
    password: "deathofmemory"
})

# Create 20 users
users = [demo_user]
10.times do
    user = User.create!({
        username: Faker::Internet.username,
        fullname: Faker::Name.name,
        email: Faker::Internet.email,
        password: Faker::Internet.password(6, 10)
    })
    users << user
end

# Each user publishes 10 stories
# Stories with titles from Greek Philosophy
users[0..1].each do |user|
    10.times do
        title = Faker::GreekPhilosophers.unique.quote[0...-1]
        body = text_selection
        story = Story.create!({
            user_id: user.id,
            title: title,
            body: body,
            title_preview: title,
            body_preview: body[0, 200],
            publish_date: Faker::Date.between(1.year.ago, Date.today)
        })
    end
end

#Stories with titles from Hamlet
10.times do
    title = Faker::Quotes::Shakespeare.unique.hamlet_quote[0...-1]
    body = text_selection
    story = Story.create!({
        user_id: users[2].id,
        title: title,
        body: body,
        title_preview: title,
        body_preview: body[0, 200],
        publish_date: Faker::Date.between(1.year.ago, Date.today)
    })
end

users[6..10].each do |user|
    10.times do
        title = Faker::TvShows::TwinPeaks.unique.quote[0...-1]
        body = text_selection
        story = Story.create!({
            user_id: user.id,
            title: title,
            body: body,
            title_preview: title,
            body_preview: body[0, 200],
            publish_date: Faker::Date.between(1.year.ago, Date.today)
        })
    end
end