# Course Catalog

This catalog will be hosted on MCCDGM and highlight all DGM courses.

## Components

### Course Listing

Each course listing should include:

* The course code

* Name of the course

* Short description, such as an excerpt of the course description

* Thumbnail image in 2:1 aspect ratio (recommended size 600&times;300px)

* Which upcoming semesters will be running a course (i.e. Spring 2018)

If the course is **accelerated or online**, that information should be listed inside parentheses following the semester and year.

If the course has **not run before**, the class `new` should be added to the parent `<div class="card">`. The course can also be added to the featured/new section.

If the course is **unavailable or not scheduled**, the class `unavailable` should be added to the parent `<div class="card">` and the footer paragraph should be updated.

Courses should be organized by course code in ascending order. Separate courses by their course code prefix, such as DGM or WEB. Each course prefix group should contain a `<div class="card-set">`, with individual course cards inside it.

#### Sample Course Card

The course code added on the parent `<div class="card">` is not used for any styling, but makes it easier to organize cards when code is collapsed.

##### With Course Link

```html
<div class="card new mb-3 dgm290">
  <a href="/dgm290" class="card-img-link">
    <img class="card-img-top" src="/images/dgm290.png" alt="DGM290">
  </a>
  <div class="card-block">
    <h4 class="card-title">
      <strong>
        <a href="/dgm290">DGM290:</a>
      </strong>
      Command Line for Web Developers
     </h4>
    <p class="card-text">
      In Command Line for Web Developers, students will become familiar with UNIX command line tools. Using automated build tools and task runners, students will be able to create and deploy static websites. Students will also learn how to use version control to work with teams and manage projects.
    </p>
    <p class="card-text small text-muted">Spring 2018 (online)</p>
  </div>
</div>
```

##### Without Course Link

```html
<div class="card new mb-3 dgm290">
  <img class="card-img-top" src="/images/dgm290.png" alt="DGM290">
  <div class="card-block">
    <h4 class="card-title">
      <strong>
        DGM290:
      </strong>
      Command Line for Web Developers
     </h4>
    <p class="card-text">
      In Command Line for Web Developers, students will become familiar with UNIX command line tools. Using automated build tools and task runners, students will be able to create and deploy static websites. Students will also learn how to use version control to work with teams and manage projects.
    </p>
    <p class="card-text small text-muted">Spring 2018 (online)</p>
  </div>
</div>
```

### Splash Page

A course "splash page" can be created for each class. This page is freeform and can be tailored to each class and may include components such as links to a class portal or sample assignments (e.g. web105), additional information not covered in the description, and so on. Splash pages should each have their own directory inside `public_html/courses` unless they have their own dedicated subdomain. Make sure that your links point to the right place!

## Technology

The course catalog uses Bootstrap 4 alpha 6 and makes use of Flexbox for adaptive layout. The original Sass template for the page can be found on [Codepen](https://codepen.io/blindingstars/pen/ZyJVOd?editors=1100).

## Uploading

Anyone with root access to the MCCDGM server can upload their course catalog files. The catalog files are stored in `public_html/courses` and can be accessed at https://courses.mccdgm.net
