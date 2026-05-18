import express from 'express'
    ) {
      node.style.visual.fontSize = 52
    }
  })

  return updated
}

function moveOfferBadgeHigher(layout) {
  const updated = structuredClone(layout)

  Object.values(updated.nodes).forEach((node) => {
    if (
      node.type === 'shape' ||
      node.data?.content?.includes('20%')
    ) {
      node.ny -= 0.08
      node.y -= 80
    }
  })

  return updated
}

app.post('/api/chat', async (req, res) => {
  try {
    const { message, layout } = req.body

    let updatedLayout = structuredClone(layout)
    let explanation = 'Transformation applied'

    const lower = message.toLowerCase()

    if (lower.includes('9:16')) {
      updatedLayout = resizeArtboard(layout, 1080, 1920)
      explanation = 'Converted layout to 9:16 aspect ratio'
    }

    else if (lower.includes('headline') && lower.includes('top')) {
      updatedLayout = moveHeadlineTop(layout)
      explanation = 'Moved headline to top'
    }

    else if (lower.includes('headline') && lower.includes('smaller')) {
      updatedLayout = makeHeadlineSmaller(layout)
      explanation = 'Made headline smaller'
    }

    else if (lower.includes('offer') || lower.includes('badge')) {
      updatedLayout = moveOfferBadgeHigher(layout)
      explanation = 'Moved offer badge higher'
    }

    res.json({
      explanation,
      updatedLayout
    })

  } catch (error) {
    console.log(error)

    res.status(500).json({
      error: 'Internal server error'
    })
  }
})

app.listen(3001, () => {
  console.log('Server running on 3001')
})
