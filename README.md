# Idiom
[Live demo](http://idiom-fullstack.herokuapp.com)

Idiom is a web app for reading and writing long-form articles based on the website Medium. Idiom was built from the ground up with with Rails and PostgreSQL on the backend and React and Redux on the frontend.

## Technologies
* Backend: Rails/ActiveRecord/PostgreSQL
* Frontend: React/Redux
* HTML
* CSS/SCSS
* Amazon S3

## Features
* User authentication using BCrypt.
* Users can create and edit stories.
* A home page with all published stories publicly viewable, as well as a list of the most liked stories.
* Users can comment on stories.
* Users can like stories.
* Users can follow other users, and see recent stories published by users they follow.

### Home Page 
![Idiom Home Page](https://github.com/Lycinus/Idiom/blob/master/app/assets/docs/Screen%20Shot%202019-03-08%20at%2011.16.40%20AM.png)

### Rendering Stories
Individual stories and groups of stories are rendered from the backend using custom routes. 

```ruby
  get 'stories/following', to: 'api/stories#followed_stories_index'
  get 'stories/bookmarked', to: 'api/stories#bookmarked_stories_index'
  get 'stories/search', to: 'api/stories#search'
  get 'users/story', to: 'api/users#story_user_show'
  
```

The stories controller uses ActiveRecord to render selected stories as JSON objects via JBuilder.

```ruby
    def index
        if (params[:story])
            @stories = Story.where(user_id: params[:story][:user_id])
        else
            @stories = Story.all
        end
        render 'api/stories/index'
    end

    def followed_stories_index
        @stories = current_user.followed_stories
        render 'api/stories/index'
    end

    def bookmarked_stories_index
        @stories = current_user.bookmarked_stories
        render 'api/stories/index'
    end

    def search
        query = params[:query].downcase
        stories_by_author = Story.joins(:user).where("LOWER(users.username) LIKE '%#{query}%'")
        stories_by_title = Story.where("LOWER(title) LIKE '%#{query}%'")
        stories_by_body = Story.where("LOWER(body) LIKE '%#{query}%'")
        @stories = stories_by_author + stories_by_title + stories_by_body
        render 'api/stories/index'
    end
```

### Story Page

### Story Form

## Future developments
* Adding photos and gifs to stories
* Adding photos upon user creation
* Dynamic home page rendering
* Highlighting



