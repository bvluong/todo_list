class Api::StepsController < ApplicationController
  def index
    render json: Todo.find(params[:todo_id]).steps
  end

  def show
    # ??
  end

  def create
    @step = Step.new(step_params)
    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def update
    @step = Step.find(params[:id])
    if @step.update_attributes(step_params)
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.find(params[:id])
    @step.delete
    render json: @step
  end

  private

  def step_params
    params.require(:step).permit(:title, :body, :done, :todo_id)
  end
end
