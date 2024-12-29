<script lang="ts">
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Paper, { Content } from '@smui/paper';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';

	let artistName = $state('');
	let venueName = $state('');
</script>

<Paper>
	<Content>
		<Textfield
			class="shaped-outlined"
			variant="outlined"
			placeholder="Artist Name"
			bind:value={artistName}
		></Textfield>
	</Content>
</Paper>
<Paper>
	<Content>
		<Textfield
			class="shaped-outlined"
			variant="outlined"
			placeholder="Venue Name"
			bind:value={venueName}
		></Textfield>
	</Content>
</Paper>

<style>
</style>
