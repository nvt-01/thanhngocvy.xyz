import { DiscussionEmbed } from "disqus-react";
import PropTypes from "prop-types";

const Comment = ({ url, id, title }) => {
    const disqusShortname = "mitech-1";
    const disqusConfig = {
        url: url,
        identifier: `${id}`,
        title: title,
    };

    return (
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    );
};

Comment.propTypes = {
    url: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
};

export default Comment;
