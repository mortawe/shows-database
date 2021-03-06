package models

import "time"

type Show struct {
	ShowID      int       `json:"show_id" db:"show_id"`
	Title       string    `json:"title" db:"title"`
	Release     time.Time `json:"release" db:"release"`
	Description string    `json:"description" db:"description"`
	EpisodeNum  int       `json:"episode_num" db:"episode_num"`
	Genre       string    `json:"genre" db:"genre"`
}

type ExtShow struct {
	Show
	Persons []Person `json:"person"`
}
