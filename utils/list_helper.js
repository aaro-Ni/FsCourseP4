const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let sum = 0
    blogs.forEach(element => {
        sum += element.likes
    });
    return sum
}

const favoriteBlog = (blogs) => {
    let currentMax = blogs[0]
    blogs.forEach((element) => {
        if (element.likes > currentMax.likes){
            currentMax = element
        }
    })

    return {
        title: currentMax.title,
         author: currentMax.author,
         likes: currentMax.likes
      }
}

const mostBlogs = (blogs) => {
    const count = (author) => {
        return blogs.filter(element => element.author === author).length
    }
    let currentHigh = {
        author: blogs[0].author,
        blogs: count(blogs[0].author)
    }
    blogs.forEach((element) => {
        const blogAmount = count(element.author)
        if (blogAmount > currentHigh.blogs){
            currentHigh = {
                author: element.author,
                blogs: blogAmount
            }
        }
    })

    return currentHigh

}

const mostLikes = (blogs) => {
    const count = (author) => {
        let sum = 0
        blogs.filter(element => element.author === author).forEach((element) => {
            sum += element.likes
        })
        return sum
    }
    let currentHigh = {
        author: blogs[0].author,
        blogs: count(blogs[0].author)
    }
    blogs.forEach((element) => {
        const likeAmount = count(element.author)
        if (likeAmount > currentHigh.blogs){
            currentHigh = {
                author: element.author,
                blogs: likeAmount
            }
        }
    })

    return currentHigh
}



module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}
    