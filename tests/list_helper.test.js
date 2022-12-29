const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
    test('when list is empty returns 0', () =>{
        expect(listHelper.totalLikes([])).toBe(0)
    })
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]
  
    test('when list has only one blog equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      expect(result).toBe(5)
    })

    const listWith3Blogs = listWithOneBlog.concat({
        _id: '5a422aa71b54a676234d17f9',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 10,
        __v: 0
      }).concat({
        _id: '5a422aa71b54a676234d17f6',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 25,
        __v: 0
      })

      test('when list has tree blogs equals the sum of their likes', () => {
        const result = listHelper.totalLikes(listWith3Blogs)
        expect(result).toBe(40)
      })
  })


describe('favoriteBlog', () => {
    const listWithOneBlog = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        }
      ]
    
      test('when list has only one blog return that blog', () => {
        const result = listHelper.favoriteBlog(listWithOneBlog)
        expect(result).toEqual({
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            likes: 5
        })
      })

      const listWith3Blogs = listWithOneBlog.concat({
        _id: '5a422aa71b54a676234d17f9',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 10,
        __v: 0
      }).concat({
        _id: '5a422aa71b54a676234d17f6',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 25,
        __v: 0
      })

      test('when list has more blogs return the max by likes', () => {
        const result = listHelper.favoriteBlog(listWith3Blogs)
        expect(result).toEqual({
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            likes: 25
        })
      })
      

    
})

describe('mostBlogs', () => {
    const listOfBlogs = [
        {
            author: "Sami"
        },
        {
            author: "Sami"
        },
        {
            author: "Rami"
        },
        {
            author: "Rami"
        },
        {
            author: "Sami"
        }
]
    test('1. for larger list returns correctly', () => {
        expect(listHelper.mostBlogs(listOfBlogs)).toEqual({
            author: "Sami",
            blogs: 3
        })
    })

    const anotherListOfBlogs = [
        {
            author: "Sami"
        },
        {
            author: "Sami"
        },
        {
            author: "Rami"
        },
        {
            author: "Rami"
        },
        {
            author: "Sami"
        },
        {
            author: "Seppo"
        },
        {
            author: "Seppo"
        },
        {
            author: "Seppo"
        },
        {
            author: "Seppo"
        },
        {
            author: "Seppo"
        }
]
test('2. for larger list returns correctly', () => {
    expect(listHelper.mostBlogs(anotherListOfBlogs)).toEqual({
        author: "Seppo",
        blogs: 5
    })
})
})

describe('mostLikes', () => {
    const listOfBlogs = [
        {
            author: "Sami",
            likes: 5
        },
        {
            author: "Sami",
            likes: 6
        },
        {
            author: "Rami",
            likes: 6
        },
        {
            author: "Rami",
            likes: 3
        },
        {
            author: "Sami",
            likes: 10
        }
]
test('1. for larger list returns correctly', () => {
    expect(listHelper.mostLikes(listOfBlogs)).toEqual({
        author: "Sami",
        blogs: 21
    })
})
const anotherListOfBlogs = [
    {
        author: "Sami",
        likes: 2
    },
    {
        author: "Sami",
        likes: 2
    },
    {
        author: "Rami",
        likes: 15
    },
    {
        author: "Rami",
        likes: 3
    },
    {
        author: "Sami",
        likes: 10
    }
]
test('2. for larger list returns correctly', () => {
    expect(listHelper.mostLikes(anotherListOfBlogs)).toEqual({
        author: "Rami",
        blogs: 18
    })
})
})