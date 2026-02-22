import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'


import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    // 1. Meta Area: Where you define Title, Description, and Keywords
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        // Change your Site Title here
        title: 'Modern Solutions for Customer Engagement',
      },
      {
        // Change your Site Description here
        name: 'description',
        content: 'Highly customizable components for building modern websites and applications that look and feel the way you mean it.',
      },
      // You can add more meta details here like OpenGraph (Social Sharing) data:
      // { property: 'og:title', content: 'Your Website Title' }
      // { property: 'og:image', content: 'https://yourwebsite.com/preview.jpg' }
    ],
    
    // 2. Links Area: Where you link global stylesheets and your site icon
    links: [
      {
        // This is your Favicon / Site Icon (it pulls from public/favicon.svg)
        rel: 'icon',
        href: '/tanstack-circle-logo.png', 
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
