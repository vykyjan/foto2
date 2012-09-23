require "bundler/capistrano"



set :application, "galerie"
set :domain, '77.93.202.103'
set :repository,  "https://github.com/vykyjan/foto2.git"
set :scm,         :git
set :user,        "root"
set :use_sudo,    false
set :deploy_via, :copy
set :copy_exclude, ['.git']

 

role :web, domain                       # Your HTTP server, Apache/etc
role :app, domain                          # This may be the same as your `Web` server
role :db, domain, :primary => true # This is where Rails migrations will run
set :branch, 'master'

 ssh_options[:paranoid] = false

before "deploy:assets:precompile", "bundle:install"
# If you are using Passenger mod_rails uncomment this:
 namespace :deploy do
   task :start do ; end
   task :stop do ; end
   task :restart, :roles => :app, :except => { :no_release => true } do
     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
   end
 end

after "deploy:symlink" do
  run "chmod -R 0666 #{current_path}/log"
  run "chown -R www-data:www-data #{current_path}/"
end
