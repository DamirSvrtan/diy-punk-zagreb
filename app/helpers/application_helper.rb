module ApplicationHelper

	def facebook_link(description)
		fb_link = facebook_scrapper(description)
		if fb_link.present?
			link_to (image_tag "facebook.jpg", size: "13x13"), "https://" + fb_link, target: "blank"
		end
	end

	def lastfm_link(description)
		lastfm_link = lastfm_scrapper(description)
		if lastfm_link.present?
			link_to (image_tag "lastfm.png", size: "13x13"), "http://" + lastfm_link, target: "blank"
		end
	end

	def facebook_scrapper(text)
		fb_link = /facebook.com\/events[\S]+/.match text
		fb_link.to_s
	end

	def lastfm_scrapper(text)
		lastfm_link = /last.fm\/event[\S]+/.match text
		lastfm_link.to_s
	end
end
