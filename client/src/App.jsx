import { useState } from 'react'
                background: msg.role === 'user' ? '#dbeafe' : '#f3f4f6'
              }}
            >
              <strong>{msg.role}</strong>
              <p>{msg.content}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type instruction...'
            style={{ flex: 1, padding: 10 }}
          />

          <button onClick={sendMessage} disabled={loading}>
            Send
          </button>
        </div>
      </div>

      <div style={{ flex: 1, padding: 20, overflow: 'auto' }}>
        <h2>Wireframe Preview</h2>

        <div
          style={{
            position: 'relative',
            width: 400,
            height: 400,
            border: '1px solid black',
            overflow: 'hidden'
          }}
        >
          {artboard.children.map((id) => {
            const node = layout.nodes[id]

            return (
              <div
                key={id}
                style={{
                  position: 'absolute',
                  left: `${node.nx * 100}%`,
                  top: `${node.ny * 100}%`,
                  width: `${node.nw * 100}%`,
                  height: `${node.nh * 100}%`,
                  border: '1px solid gray',
                  fontSize: 10,
                  overflow: 'hidden',
                  background: node.type === 'image'
                    ? '#bfdbfe'
                    : node.type === 'text'
                    ? '#fde68a'
                    : '#fca5a5'
                }}
              >
                {node.data?.content || node.name}
              </div>
            )
          })}
        </div>

        <h2>Updated JSON</h2>

        <pre
          style={{
            background: '#111827',
            color: 'white',
            padding: 20,
            borderRadius: 10,
            overflow: 'auto'
          }}
        >
          {JSON.stringify(layout, null, 2)}
        </pre>
      </div>
}
