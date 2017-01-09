Rails.application.routes.draw do

    root 'pages#home'
    get 'courses' => 'index'
    get 'courses/:course_name' => 'courses#show'
    get 'courses/:course_name/unit/:unit_id' => 'unit#show'

end
