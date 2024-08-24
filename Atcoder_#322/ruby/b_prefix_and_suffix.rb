n, m = gets.split.map(&:to_i)
s = gets.chomp
t = gets.chomp

is_prefix = (s == t[0...n])

is_suffix = (s == t[-n..-1])

if is_prefix && is_suffix
  puts 0
elsif is_prefix
  puts 1
elsif is_suffix
  puts 2
else
  puts 3
end
