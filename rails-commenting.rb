# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the controller class for BlogPosts. It is also child class of ApplicationController. We can place and define methods withing it.
class BlogPostsController < ApplicationController
  def index
    # ---2) This is an instance variable, which holds the ability to call all instances within BlogPost 
    @posts = BlogPost.all
  end

  # ---3) this method is used to show specific instances by calling an individual ID. The reason it can do that, is due to the .find that is connected to BlogsPost as well as the params that is set to [:id]
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This is method is used to create a new instance withing a db. While using this method, me must place data within it in order for the instance to be saved
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This method is used to create a ne instance, but in theis case, we are giving the ablity to create an instance within post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This method is used to update a specific instance . 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This methid is used to Update as will. it will find and update the specified instance. When update is made, it will redirect you back to the blogs post
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This method to destroy/delete a specific instance, once it is deleted, it will automatically redirect you to the blogs path
      redirect_to blog_posts_path
    end
  end

  # ---9) Private is used to keep the methods below it  seperate from the other methods. You need to call it directly to use it or it will not be accessible.
  private
  def blog_post_params
    # ---10) This is a strong param that is needed to be able to be used as an argument
    params.require(:blog_post).permit(:title, :content)
  end
end
