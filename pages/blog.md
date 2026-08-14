<!-- ---
layout: default
title: Blog
permalink: /blog/
---

# Blog

<div class="posts">
  {% for post in site.posts %}
    <div class="post-preview">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt }}</p>
      <a href="{{ post.url | relative_url }}">Read more...</a>
    </div>
  {% endfor %}
</div> -->