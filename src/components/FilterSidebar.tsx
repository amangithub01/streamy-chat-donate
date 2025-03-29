
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  subjects: string[];
  selectedSubjects: string[];
  setSelectedSubjects: (subjects: string[]) => void;
  conditions: string[];
  selectedConditions: string[];
  setSelectedConditions: (conditions: string[]) => void;
}

const FilterSidebar = ({
  priceRange,
  setPriceRange,
  subjects,
  selectedSubjects,
  setSelectedSubjects,
  conditions,
  selectedConditions,
  setSelectedConditions
}: FilterProps) => {
  const [openSubjects, setOpenSubjects] = React.useState(true);
  const [openConditions, setOpenConditions] = React.useState(true);
  const [openPriceRange, setOpenPriceRange] = React.useState(true);
  
  const toggleSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };
  
  const toggleCondition = (condition: string) => {
    if (selectedConditions.includes(condition)) {
      setSelectedConditions(selectedConditions.filter(c => c !== condition));
    } else {
      setSelectedConditions([...selectedConditions, condition]);
    }
  };
  
  return (
    <Card className="bg-card border-muted h-full">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        
        <Collapsible open={openPriceRange} onOpenChange={setOpenPriceRange} className="mb-6">
          <CollapsibleTrigger className="flex w-full items-center justify-between mb-2 font-medium">
            Price Range
            {openPriceRange ? (
              <ChevronUp size={18} className="text-muted-foreground" />
            ) : (
              <ChevronDown size={18} className="text-muted-foreground" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="pt-2 px-1">
              <Slider 
                defaultValue={[priceRange[0], priceRange[1]]} 
                max={200}
                step={5}
                onValueChange={(value) => setPriceRange([value[0], value[1]])}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        <Collapsible open={openSubjects} onOpenChange={setOpenSubjects} className="mb-6">
          <CollapsibleTrigger className="flex w-full items-center justify-between mb-2 font-medium">
            Subject
            {openSubjects ? (
              <ChevronUp size={18} className="text-muted-foreground" />
            ) : (
              <ChevronDown size={18} className="text-muted-foreground" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2 pt-2">
              {subjects.map(subject => (
                <div key={subject} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`subject-${subject}`} 
                    checked={selectedSubjects.includes(subject)}
                    onCheckedChange={() => toggleSubject(subject)}
                  />
                  <Label htmlFor={`subject-${subject}`} className="text-sm cursor-pointer">
                    {subject}
                  </Label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        <Collapsible open={openConditions} onOpenChange={setOpenConditions} className="mb-6">
          <CollapsibleTrigger className="flex w-full items-center justify-between mb-2 font-medium">
            Condition
            {openConditions ? (
              <ChevronUp size={18} className="text-muted-foreground" />
            ) : (
              <ChevronDown size={18} className="text-muted-foreground" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2 pt-2">
              {conditions.map(condition => (
                <div key={condition} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`condition-${condition}`} 
                    checked={selectedConditions.includes(condition)}
                    onCheckedChange={() => toggleCondition(condition)}
                  />
                  <Label htmlFor={`condition-${condition}`} className="text-sm cursor-pointer">
                    {condition}
                  </Label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default FilterSidebar;
