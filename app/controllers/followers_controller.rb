class FollowersController < ApplicationController
  before_action :authenticate_user!

  def random
      render json: User.where(["id != ?", current_user.id])
                       .order("random()").all
  end

  def create
    follower = Follower.create(user_id: params[:user_id], followed_by: current_user.id)
    render json: follower;
  end

end
