package main

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()

	r.Use(middleware.Logger)

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		_, err := w.Write([]byte("Hello world"))
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
		}
	})

	err := http.ListenAndServe(":8000", r)
	if err != nil {
		fmt.Errorf("failed to start server: %v", err)
	}
}
