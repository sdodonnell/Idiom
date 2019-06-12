# Idiom
[Live demo](http://idiom-fullstack.herokuapp.com)

Idiom is a web app for reading and writing long-form articles based on the website Medium. Idiom was built from the ground up with with Rails and PostgreSQL on the backend and React and Redux on the frontend.

## Technologies
* Backend: Rails/ActiveRecord/PostgreSQL
* Frontend: React/Redux
* HTML
* CSS/SCSS
* Amazon S3
* Webpack

## Features
* User authentication using BCrypt.
* Users can create and edit stories.
* A home page with all published stories publicly viewable, as well as a list of the most liked stories.
* Users can comment on stories.
* Users can like stories.
* Users can follow other users, and see recent stories published by users they follow.

### Home Page 
The home page displays a selection of four randomly chosen "featured" stories as well as a feed of all stories in the database randomized using the Fisher-Yates shuffle.


![Idiom Home Page](https://github.com/Lycinus/Idiom/blob/master/app/assets/docs/home-page.png)

```js
// frontend/components/Feed/feed.jsx

    renderStoriesList() {

        const shuffle = array => {
            let currentIndex = array.length;
            let temporaryValue;
            let randomIndex;
    
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
    
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
    
        return array;
        };

        const storiesList = 
            Object.values(this.props.stories)
                  .map(story => 
                    <FeedItem 
                        key={story.id}
                        story={story}
                        authorId={story.authorId}
                        authorName={story.authorName}/>)
        return shuffle(storiesList)

    }
```

### Rendering Stories
Individual stories and groups of stories are rendered from the backend using custom routes. 


```ruby
# app/config/routes.rb

  get 'stories/following', to: 'api/stories#followed_stories_index'
  get 'stories/bookmarked', to: 'api/stories#bookmarked_stories_index'
  get 'stories/search', to: 'api/stories#search'
  get 'users/story', to: 'api/users#story_user_show'
  
```

The stories controller uses ActiveRecord to render selected stories as JSON objects via JBuilder.


```ruby
# app/controllers/api/stories_controller.rb

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
The story page incorporates a scroll event listener that renders a sidebar component when a user scrolls down 500 pixels. From the sidebar, a user can like and bookmark a story. The sidebar is animated using [Animate.css](https://github.com/daneden/animate.css).


![Idiom story page](https://github.com/Lycinus/Idiom/blob/master/app/assets/docs/story-form.gif)

```js
// frontend/components/Story/story_component.jsx

    isLiked() {
        if (!this.props.currentUser) return false;
        const likes = this.props.likes;
        for (let id in likes) {
            if (likes[id].userId === this.props.currentUser.id) {
                return true;
            }
        }
        return false
    }

    isBookmarked() {
        if (!this.props.currentUser) return false;
        const bookmarks = this.props.bookmarks;
        for (let id in bookmarks) {
            if (bookmarks[id].userId === this.props.currentUser.id) {
                return true;
            }
        }
        return false
    }

```

```js
// frontend/components/Story/story_sidebar.jsx

   constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
            liked: this.props.newProps.liked,
            bookmarked: this.props.newProps.bookmarked
        }

        this.handleScroll = this.handleScroll.bind(this)
        this.addLike = this.addLike.bind(this)
        this.addBookmark = this.addBookmark.bind(this)
        this.bookmarkClass = this.bookmarkClass.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        if(window.pageYOffset > 500 && this.state.scrolled === false) {
            this.setState({
                scrolled: true,
            });
        } else if (window.pageYOffset < 450) {
            this.setState({
                scrolled: false,
            });
        }
    }

    renderLikes() {
        if (this.props.newProps.likes.length > 0) {
            return this.props.newProps.likes.length
        } else {
            return null
        }
    }

    addLike() {    
        if (!this.state.liked) {
            this.props.newProps.addLike({userId: this.props.newProps.currentUser.id, storyId: this.props.newProps.storyId})
            this.setState({
                liked: true
            })
        }
    }

    addBookmark() {
        if (!this.state.bookmarked) {
            this.props.newProps.addBookmark({
                userId: this.props.newProps.currentUser.id, 
                storyId: this.props.newProps.storyId
            })
            this.setState({
                bookmarked: true
            })
        }
    }
```

## Future developments
* Adding photos and gifs to stories
* Adding photos upon user creation
* Dynamic home page rendering
* Highlighting



