CREATE TABLE `users`
(
	`id` int,
	`first_name` varchar(255),
	`last_name` varchar(255),
	`email` varchar(255),
	`phone` varchar(255),
	`annonymous` tinyint,
	PRIMARY KEY (id)
);

CREATE TABLE `presentations` 
(
	`id` int,
	`name` varchar(255),
	`speaker` varchar(255),
	`duration` int,
	`start` datetime,
	PRIMARY KEY (id)
);

CREATE TABLE `feedback` 
(
	`presentation_id` int,
	`user_id` int,
	`rating` int,
	`comment` text,
	`feedback_date` datetime,
    PRIMARY KEY (presentation_id, user_id)
);

ALTER TABLE `feedback` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `feedback` ADD FOREIGN KEY (`presentation_id`) REFERENCES `presentations` (`id`);
