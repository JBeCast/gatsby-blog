import React from 'react';
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from '../components/layout';

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`

export default () => (
  <Layout>
    <h1>Hello from page 3!</h1>
    <StaticQuery
      query={getImageData}
      render={data => (
        <table>
          <thead>
            <tr>
              <th>Relative Path</th>
              <th>Size</th>
              <th>Extension</th>
              <th>BirthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({node}, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    />
    <Link to="/page-2">Go to page 2</Link>
  </Layout>
)