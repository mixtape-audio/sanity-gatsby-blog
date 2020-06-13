export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee4dc84f938de4e2228145e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kgbucdnh',
                  apiId: 'e7bb9f31-df16-453c-8bc0-3e62b8d87f03'
                },
                {
                  buildHookId: '5ee4dc8400c1fe56e805a1e4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-s7sjz9fz',
                  apiId: '62ab87c8-2135-488b-8017-01f72f358410'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mixtape-audio/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-s7sjz9fz.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
