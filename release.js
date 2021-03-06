
/** app definition in javascript, easier to be maintained than json **/

module.exports = [
  {
    appname: 'ownCloud',
    flavor: 'vanilla',
    components: [
      {
        name: 'owncloud',
        namespace: 'library',
        imageLink: 'owncloud.png',
        tag: 'latest',
        repo: null,
        overlay: true,
        config: {
          HostConfig: {
            Binds: ["/var/www/html:/var/www/html"],
            RestartPolicy: {
              Name: 'unless-stopped'
            },
            PortBindings: { "80/tcp": [{ HostPort: "10086" }] },
            PublishAllPorts: false
          }
        },
        volumes: []
      }
    ]
  },
  {
    appname: 'transmission',
    flavor: 'vanilla',
    components: [
      {
        name: 'transmission',
        namespace: 'dperson',
        imageLink: 'transmission.png',
        tag: 'latest',
        repo: null,
        overlay: true,
        config: {
          HostConfig: {
            Binds: ["/var/lib/transmission-daemon:/var/lib/transmission-daemon"],
            RestartPolicy: {
              Name: 'unless-stopped'
            },
            PortBindings: { "9091/tcp": [{ HostPort: "9091" }] },
            PublishAllPorts: false
          }
        },
        volumes: []
      }
    ]
  },
//   {
//     appname: 'calibre',
//     flavor: 'vanilla',
//     components: [
//       {
//         name: 'docker-rdp-calibre',
//         namespace: 'aptalca',
//         imageLink: 'calibre.png',
//         tag: 'latest',
//         repo: null,
//         overlay: true,
//         config: {
//           HostConfig: {
//             RestartPolicy: {
//               Name: 'unless-stopped'
//             },
//             PublishAllPorts: true
//           }
//         },
//         volumes: []
//       }
//     ]
//   },
//   {
//     appname: 'elasticsearch',
//     flavor: 'vanilla',
//     components: [
//       {
//         name: 'elasticsearch',
//         namespace: 'library',
//         imageLink: 'elasticsearch.png',
//         tag: 'latest',
//         repo: null,
//         overlay: true,
//         config: {
//           HostConfig: {
//             RestartPolicy: {
//               Name: 'unless-stopped'
//             },
//             PublishAllPorts: true
//           }
//         },
//         volumes: []
//       }
//     ]
//   },
  {
    appname: 'apache',
    flavor: 'vanilla',
    components: [
      {
        name: 'httpd',
        namespace: 'library',
        imageLink: 'apache.png',
        tag: 'latest',
        repo: null,
        overlay: true,
        config: {
          HostConfig: {
            RestartPolicy: {
              Name: 'unless-stopped'
            },
            PublishAllPorts: true
          }
        },
        volumes: []
      }
    ]
  },
  {
    appname: 'samba',
    flavor: 'vanilla',
    components: [
      {
        name: 'sambad',
        namespace: 'wisnuc',
        imageLink: 'sambad.png',
        tag: 'latest',
        repo: null,
        overlay: true,
        config: {
          HostConfig: {
            RestartPolicy: {
              Name: 'unless-stopped'
            }, 
            PortBindings: { 
              "137/udp": [{ HostPort: "137" }],
              "138/udp": [{ HostPort: "138" }],
              "139/tcp": [{ HostPort: "139" }],
              "445/tcp": [{ HostPort: "445" }]
            },
            PublishAllPorts: true
          }
        },
        volumes: []
      }
    ]
  },
//   {
//     appname: 'solr',
//     flavor: 'vanilla',
//     components: [
//       {
//         name: 'solr',
//         namespace: 'library',
//         imageLink: 'solr.png',
//         tag: 'latest',
//         repo: null,
//         overlay: true,
//         config: {
//           HostConfig: {
//             RestartPolicy: {
//               Name: 'unless-stopped'
//             },
//             PublishAllPorts: true
//           },
//         },
//         volumes: []
//       }
//     ]
//   },
//   {
//     appname: 'redis',
//     flavor: 'vanilla',
//     components: [
//       {
//         name: 'redis',
//         namespace: 'library',
//         imageLink: 'redis.png',
//         tag: 'latest',
//         repo: null,
//         overlay: true,
//         config: {
//           HostConfig: {
//             RestartPolicy: {
//               Name: 'unless-stopped'
//             },
//             PublishAllPorts: true
//           }
//         },
//         volumes: []
//       }
//     ]
//   },
  {
    appname: 'busybox',
    flavor: 'vanilla',
    components: [
      {
        name: 'busybox',
        namespace: 'library',
        imageLink: 'busybox.png',
        tag: 'latest',
        repo: null,
        overlay: true,
        config: {},
        volumes: []
      }
    ]
  },
//   {
//     appname: 'postgres',
//     flavor: 'vanilla',
//     components: [
//       {
//         name: 'postgres',
//         namespace: 'library',
//         imageLink: 'postgresql.png',
//         tag: 'latest',
//         repo: null,
//         overlay: true,
//         config: {
//           HostConfig: {
//             RestartPolicy: {
//               Name: 'unless-stopped'
//             },
//             PublishAllPorts: true
//           }
//         },
//         volumes: []
//       }
//     ]
//   },
//   {
//     appname: 'wordpress',
//     flavor: 'vanilla',
//     components: [
//       {
//         name: 'wordpress',
//         namespace: 'library',
//         imageLink: 'wordpress.png',
//         tag: 'latest',
//         repo: null,
//         overlay: true,
//         config: {
//           HostConfig: {
//             RestartPolicy: {
//               Name: 'unless-stopped'
//             },
//             PublishAllPorts: true
//           }
//         },
//         volumes: []
//       }
//     ]
//   },
]
