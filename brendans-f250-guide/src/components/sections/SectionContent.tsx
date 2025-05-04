import React from 'react';
import { 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Divider, 
  Paper, 
  Table, 
  TableHead, 
  TableBody, 
  TableRow, 
  TableCell,
  Box,
  Card,
  CardHeader,
  CardContent
} from '@mui/material';
import { SectionContent as SectionContentType, ContentItem } from '../../data/guideData';

interface SectionContentProps {
  content: SectionContentType[];
}

const SectionContent: React.FC<SectionContentProps> = ({ content }) => {
  const renderContentItem = (item: ContentItem) => {
    switch (item.type) {
      case 'heading':
        return (
          <Typography 
            variant={`h${item.level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} 
            gutterBottom
          >
            {item.text}
          </Typography>
        );
      
      case 'paragraph':
        return (
          <Typography variant="body1" paragraph>
            {item.text}
          </Typography>
        );
      
      case 'list':
        return (
          <List>
            {item.items.map((listItem, index) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
                <ListItemText 
                  primary={listItem} 
                  primaryTypographyProps={{ 
                    style: { 
                      whiteSpace: 'pre-line' // This preserves line breaks in the list items
                    } 
                  }}
                />
              </ListItem>
            ))}
          </List>
        );
      
      case 'table':
        return (
          <Paper sx={{ width: '100%', overflow: 'hidden', mb: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {item.headers.map((header, index) => (
                    <TableCell key={index}>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {item.rows.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <TableCell key={cellIndex}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        );
      
      case 'image':
        return (
          <Box sx={{ my: 2, textAlign: 'center' }}>
            <img 
              src={item.src} 
              alt={item.alt} 
              style={{ maxWidth: '100%', height: 'auto' }} 
            />
            <Typography variant="caption" display="block">
              {item.alt}
            </Typography>
          </Box>
        );
      
      case 'divider':
        return <Divider sx={{ my: 2 }} />;
      
      default:
        return null;
    }
  };

  const renderContent = (contentItems: SectionContentType[]) => {
    return contentItems.map((item, index) => {
      if (item.type === 'subsection') {
        return (
          <Card key={index} sx={{ mb: 3, mt: 2 }}>
            <CardHeader 
              title={item.title} 
              sx={{ 
                backgroundColor: 'primary.light', 
                color: 'primary.contrastText',
                py: 1
              }} 
            />
            <CardContent>
              {item.content.map((subItem, subIndex) => (
                <React.Fragment key={subIndex}>
                  {renderContentItem(subItem)}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        );
      }
      
      return (
        <React.Fragment key={index}>
          {renderContentItem(item as ContentItem)}
        </React.Fragment>
      );
    });
  };

  return <>{renderContent(content)}</>;
};

export default SectionContent;
