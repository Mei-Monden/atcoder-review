s_input = gets.chomp
t_input = gets.chomp

s1, s2 = s_input[0], s_input[1]
t1, t2 = t_input[0], t_input[1]

array = ["A", "B", "C", "D", "E"]

s1_index = array.index(s1)
s2_index = array.index(s2)
t1_index = array.index(t1)
t2_index = array.index(t2)

s_distance = [ (s1_index - s2_index).abs, (5 - (s1_index - s2_index).abs) ].min
t_distance = [ (t1_index - t2_index).abs, (5 - (t1_index - t2_index).abs) ].min

if s_distance == t_distance
  puts "Yes"
else
  puts "No"
end
