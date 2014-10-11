module ApplicationHelper

	PHOTO_SIZE = "18x18"

	FACEBOOK_REGEX = /facebook.com\/events[\S]+/
	LASTFM_REGEX   = /last.fm\/event[\S]+/

	def social_network_link(description, network_type=:facebook)
		link = link_scrapper(description, network_type)
		if link.present?
			link_to((image_tag "#{network_type}.jpg", size: PHOTO_SIZE), "https://#{link}", target: "blank")
		end
	end

	def link_scrapper(text, network_type=:facebook)
		regex = ApplicationHelper.const_get("#{network_type.upcase}_REGEX")
    link = regex.match(text)
		link.to_s
	end
end
