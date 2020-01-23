var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("webdream");
  var myobj = [
    { 
      title: 'New Test Automation Development Project', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x318/1dba16f6d8821fa807775bfd03607dea/photo-1563985336376-568060942b80.jpg',
      isTemplate: true,
      templateType: 'Engineering',
      visitedTime: '',
      isStarred: false,
      author: 'by Monica, MLProductions LLC, Owner',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/84504a420c774ef0347aab5482dcc3a1/50.png',
      brief: 'Guide the initial tasks necessary for developing a Software Test Automation project.',
      linkUrl: '',
    },
    { 
      title: 'Agile Sprint Board', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/e8a76cd7622d8889d42c2977427bb584/photo-1515079424831-8fce6574676d.jpg',
      isTemplate: true,
      templateType: 'Engineering',
      visitedTime: '',
      isStarred: false,
      author: 'by Trello Engineering Team',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/ad73295e9ba9aebcc0ac2e73b04c256e/50.png',
      brief: 'Develop an agile workflow that keeps your team of developers on task and under deadline.',
      linkUrl: '',
    },
    { 
      title: 'New Test Automation Development Project', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x318/1dba16f6d8821fa807775bfd03607dea/photo-1563985336376-568060942b80.jpg',
      isTemplate: true,
      templateType: 'Engineering',
      visitedTime: '',
      isStarred: false,
      author: 'by Monica, MLProductions LLC, Owner',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/84504a420c774ef0347aab5482dcc3a1/50.png',
      brief: 'Guide the initial tasks necessary for developing a Software Test Automation project.',
      linkUrl: '',
    },
    { 
      title: 'Agile Sprint Board', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/e8a76cd7622d8889d42c2977427bb584/photo-1515079424831-8fce6574676d.jpg',
      isTemplate: true,
      templateType: 'Engineering',
      visitedTime: '',
      isStarred: false,
      author: 'by Trello Engineering Team',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/ad73295e9ba9aebcc0ac2e73b04c256e/50.png',
      brief: 'Develop an agile workflow that keeps your team of developers on task and under deadline.',
      linkUrl: '',
    },
    { 
      title: 'New Test Automation Development Project', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x318/1dba16f6d8821fa807775bfd03607dea/photo-1563985336376-568060942b80.jpg',
      isTemplate: true,
      templateType: 'Engineering',
      visitedTime: '',
      isStarred: false,
      author: 'by Monica, MLProductions LLC, Owner',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/84504a420c774ef0347aab5482dcc3a1/50.png',
      brief: 'Guide the initial tasks necessary for developing a Software Test Automation project.',
      linkUrl: '',
    },
    { 
      title: 'Agile Sprint Board', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/e8a76cd7622d8889d42c2977427bb584/photo-1515079424831-8fce6574676d.jpg',
      isTemplate: true,
      templateType: 'Engineering',
      visitedTime: '',
      isStarred: false,
      author: 'by Trello Engineering Team',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/ad73295e9ba9aebcc0ac2e73b04c256e/50.png',
      brief: 'Develop an agile workflow that keeps your team of developers on task and under deadline.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Business',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Business',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Business',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Business',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Business',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Business',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Design',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Design',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Design',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Design',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Design',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Design',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Education',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Education',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Education',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Education',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Education',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Education',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Education',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Education',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Marketing',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Marketing',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Marketing',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Marketing',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Marketing',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Marketing',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Marketing',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'HR & Operation',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'HR & Operation',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'HR & Operation',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'HR & Operation',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'HR & Operation',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'HR & Operation',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'HR & Operation',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'HR & Operation',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Personal',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Personal',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Personal',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Personal',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Personal',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Personal',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Personal',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Personal',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
    { 
      title: 'OKRs', 
      backgroundImageUrl: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1413714ba3ce3a062cacb0512a5d5880/photo-1475694867812-f82b8696d610.jpg',
      isTemplate: true,
      templateType: 'Personal',
      visitedTime: '',
      isStarred: false,
      author: 'by Kevan Lee, VP of Marketing @ Buffer',
      symbolIconUrl: 'https://trello-logos.s3.amazonaws.com/8c37de968d6e878525147d318bfd26cf/50.png',
      brief: 'Learn how Kevan Lee helps his team prioritize and plan by setting OKRs - objectives and key results.',
      linkUrl: '',
    },
  ];
  dbo.collection("boards").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
