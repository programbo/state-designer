import * as React from "react"
import { Flex, Heading, Styled, Box } from "theme-ui"
import { ui } from "../states/ui"
import { useStateDesigner } from "@state-designer/react"

const Data: React.FC = (props) => {
  const local = useStateDesigner(ui)
  const captive = useStateDesigner(local.data.captive, [local.data.captive])

  return (
    <Box
      sx={{
        overflowX: "hidden",
        overflowY: "scroll",
      }}
    >
      <Flex
        variant="contentHeading"
        sx={{ position: "sticky", top: 0, left: 0 }}
      >
        <Heading variant="contentHeading">Data</Heading>
      </Flex>
      <Box sx={{ p: 2 }}>
        <Styled.pre>
          <Styled.code>{JSON.stringify(captive.data, null, 2)}</Styled.code>
        </Styled.pre>
      </Box>
    </Box>
  )
}
export default Data
