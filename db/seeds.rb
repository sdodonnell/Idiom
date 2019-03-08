require 'open-uri'

User.destroy_all
Story.destroy_all

aws_path = "https://s3-us-west-1.amazonaws.com/idiom-fullstack-dev/"

IMAGES = [
    aws_path + 'architecture-about-building-modern-158571.jpg',
    aws_path + 'holocaust-memorial-berlin-holocaust-memorial-188975.jpg',
    aws_path + 'pexels-photo-1.jpg',
    aws_path + 'pexels-photo-1022928.jpg',
    aws_path + 'pexels-photo-1029606.jpg',
    aws_path + 'pexels-photo-103589.jpg',
    aws_path + 'pexels-photo-109479.jpg',
    aws_path + 'pexels-photo-1117452.jpg',
    aws_path + 'pexels-photo-1145364.jpg',
    aws_path + 'pexels-photo-1253049.jpg',
    aws_path + 'pexels-photo-1292496.jpg',
    aws_path + 'pexels-photo-136720.jpg',
    aws_path + 'pexels-photo-137602.jpg',
    aws_path + 'pexels-photo-139198.jpg',
    aws_path + 'pexels-photo-1487154.jpg',
    aws_path + 'pexels-photo-149369.jpg',
    aws_path + 'pexels-photo-157811.jpg',
    aws_path + 'pexels-photo-164328.jpg',
    aws_path + 'pexels-photo-164664.jpg',
    aws_path + 'pexels-photo-175771.jpg',
    aws_path + 'pexels-photo-1758672.jpg',
    aws_path + 'pexels-photo-187913.jpg',
    aws_path + 'pexels-photo-227675-1.jpg',
    aws_path + 'pexels-photo-227675.jpg',
    aws_path + 'pexels-photo-227729.jpg',
    aws_path + 'pexels-photo-248921.jpg',
    aws_path + 'pexels-photo-250450.jpg',
    aws_path + 'pexels-photo-273680.jpg',
    aws_path + 'pexels-photo-305816.jpg',
    aws_path + 'pexels-photo-305823.jpg',
    aws_path + 'pexels-photo-327482.jpg',
    aws_path + 'pexels-photo-340981.jpg',
    aws_path + 'pexels-photo-358558.jpg',
    aws_path + 'pexels-photo-374858.jpg',
    aws_path + 'pexels-photo-380330-1.jpg',
    aws_path + 'pexels-photo-380330.jpg',
    aws_path + 'pexels-photo-38132-1.jpg',
    aws_path + 'pexels-photo-38132.jpg',
    aws_path + 'pexels-photo-412842.jpg',
    aws_path + 'pexels-photo-430207.jpg',
    aws_path + 'pexels-photo-432185.jpg',
    aws_path + 'pexels-photo-434650.jpg',
    aws_path + 'pexels-photo-532561.jpg',
    aws_path + 'pexels-photo-532563.jpg',
    aws_path + 'pexels-photo-532571.jpg',
    aws_path + 'pexels-photo-534153.jpg',
    aws_path + 'pexels-photo-536922.jpg',
    aws_path + 'pexels-photo-552470.jpg',
    aws_path + 'pexels-photo-562211.jpg',
    aws_path + 'pexels-photo-593158.jpg',
    aws_path + 'pexels-photo-671930.jpg',
    aws_path + 'pexels-photo-771443.jpg',
    aws_path + 'pexels-photo-774548.jpg',
    aws_path + 'pexels-photo-796544.jpg',
    aws_path + 'pexels-photo-838423.jpg',
    aws_path + 'pexels-photo-842158.jpg',
    aws_path + 'pexels-photo-845242.jpg',
    aws_path + 'pexels-photo-879355.jpg',
    aws_path + 'pexels-photo-911758.jpg',
    aws_path + 'pexels-photo-921294.jpg',
    aws_path + 'pexels-photo-921319.jpg',
    aws_path + 'pexels-photo-929282.jpg',
    aws_path + 'pexels-photo-963436.jpg',
    aws_path + 'pexels-photo-992987.jpg',
    aws_path + 'pexels-photo.jpg',
    aws_path + 'staircase-spiral-architecture-interior-39656.jpg',
    aws_path + 'vaulted-cellar-tunnel-arches-keller-60611.jpg',
    aws_path + 'windows-building-pattern-modern.jpg'
]

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
    password: "deathofmemory",
    bio: "Sharing my thoughts with the world. And now the play is played out; and of rhetoric enough."
})

file = open(aws_path + "profile_10.jpg")
demo_user.profile_image.attach(io: file, filename: "profile_10.jpg")
demo_user.save

# Create 10 users
users = [demo_user]
9.times do |i|
    user = User.create!({
        username: Faker::Internet.username,
        fullname: Faker::Name.name,
        email: Faker::Internet.email,
        password: Faker::Internet.password(6, 10),
        bio: Faker::Books::Dune.unique.quote
    })

    file = open(aws_path + "profile_#{i}.jpg")
    user.profile_image.attach(io: file, filename: "profile_#{i}.jpg")
    user.save
    users << user
end


# Each user publishes 10 stories

count = 0

# Stories with titles from Greek Philosophy
users[0..2].each do |user|
    6.times do
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

        file = open(IMAGES[count])
        name = IMAGES[count].split("/")[-1]
        story.image.attach(io: file, filename: name)
        story.save
        count += 1
    end
end

#Stories with titles from Hamlet
users[3..4].each do |user|
    9.times do
        title = Faker::Quotes::Shakespeare.unique.hamlet_quote[0...-1]
        body = text_selection
        story = Story.create!({
            user_id: user.id,
            title: title,
            body: body,
            title_preview: title,
            body_preview: body[0, 200],
            publish_date: Faker::Date.between(1.year.ago, Date.today)
        })

        file = open(IMAGES[count])
        name = IMAGES[count].split("/")[-1]
        story.image.attach(io: file, filename: name)
        story.save
        count += 1
    end
end

8.times do
    title = Faker::Quotes::Shakespeare.unique.king_richard_iii_quote[0...-1]
    body = text_selection
    story = Story.create!({
        user_id: users[5].id,
        title: title,
        body: body,
        title_preview: title,
        body_preview: body[0, 200],
        publish_date: Faker::Date.between(1.year.ago, Date.today)
    })

    file = open(IMAGES[count])
    name = IMAGES[count].split("/")[-1]
    story.image.attach(io: file, filename: name)
    story.save
    count += 1
end


users[6..8].each do |user|
    8.times do
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

        file = open(IMAGES[count])
        name = IMAGES[count].split("/")[-1]
        story.image.attach(io: file, filename: name)
        story.save
        count += 1
    end
end



