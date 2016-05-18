require 'compass'
# Change Compass configuration
compass_config do |config|
  config.output_style = :expanded
  config.sass_options = {:debug_info => false}
end

helpers do
  def inline_css(source)
    file     = asset_path(:css, source)
    resource = sitemap.find_resource_by_destination_path(file)
    css      = resource.render

    # Code smell: Inappropriate intimacy
    if extensions[:minify_css]
      compressor = config[:css_compressor] || extensions[:minify_css].options[:compressor] || ::Middleman::Extensions::MinifyCss::SassCompressor
      css        = compressor.compress(css)
    end

    "<style type='text/css'>#{css}</style>"
  end
end

require 'slim'
# Slim::Engine.set_default_options :pretty => false

Slim::Engine.disable_option_validator!
set :slim, :layout_engine => :slim
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'


activate :directory_indexes

configure :development do
  activate :livereload
end

activate :deploy do |deploy|
  # deploy.method = :git
  # deploy.remote   = 'git@github.com:herrweis/herrweis.github.io.git'
  # deploy.branch   = 'master'
  deploy.method   = :ftp
  deploy.host            = 'andreasweis.com'
  deploy.path            = 'portfolio2016'
  deploy.user            = 'andreasweis'
  deploy.password        = 'F%hCD53;'
  deploy.build_before = true
end

configure :build do
  activate :minify_css
  activate :minify_javascript

  activate :gzip do |gzip|
  gzip.exts = %w(.js .css .svg)
  end

  activate :imageoptim
  activate :relative_assets
  set :relative_links, true
end


# disable layout
page ".htaccess.apache", :layout => false

# rename file after build
after_build do
  File.rename 'build/.htaccess.apache', 'build/.htaccess'
end
