import React from 'react'

export default function Article(
  {
    title, 
    date = "January 1, 1970", 
    preview, 
    minutes
  }
) {
  return (
    <div>
         <article>
            <h3>{title}</h3>
            <small>{date}{minutes} min read</small>
            <p>{preview}</p>
        </article>
    </div>
  )
}