# `containerRegistry` Submodule <a name="`containerRegistry` Submodule" id="@cdktf/provider-ionoscloud.containerRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistry <a name="ContainerRegistry" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry ionoscloud_container_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistry(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  api_subnet_allow_list: typing.List[str] = None,
  features: ContainerRegistryFeatures = None,
  garbage_collection_schedule: ContainerRegistryGarbageCollectionSchedule = None,
  id: str = None,
  timeouts: ContainerRegistryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#location ContainerRegistry#location}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#name ContainerRegistry#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.apiSubnetAllowList">api_subnet_allow_list</a></code> | <code>typing.List[str]</code> | The subnet CIDRs that are allowed to connect to the registry. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.features">features</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeatures">ContainerRegistryFeatures</a></code> | features block. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.garbageCollectionSchedule">garbage_collection_schedule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule">ContainerRegistryGarbageCollectionSchedule</a></code> | garbage_collection_schedule block. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#id ContainerRegistry#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#location ContainerRegistry#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#name ContainerRegistry#name}.

---

##### `api_subnet_allow_list`<sup>Optional</sup> <a name="api_subnet_allow_list" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.apiSubnetAllowList"></a>

- *Type:* typing.List[str]

The subnet CIDRs that are allowed to connect to the registry.

Specify 'a.b.c.d/32' for an individual IP address. **Note**: If this list is empty or not set, there are no restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#api_subnet_allow_list ContainerRegistry#api_subnet_allow_list}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.features"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeatures">ContainerRegistryFeatures</a>

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#features ContainerRegistry#features}

---

##### `garbage_collection_schedule`<sup>Optional</sup> <a name="garbage_collection_schedule" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.garbageCollectionSchedule"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule">ContainerRegistryGarbageCollectionSchedule</a>

garbage_collection_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#garbage_collection_schedule ContainerRegistry#garbage_collection_schedule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#id ContainerRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#timeouts ContainerRegistry#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putFeatures">put_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putGarbageCollectionSchedule">put_garbage_collection_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.resetApiSubnetAllowList">reset_api_subnet_allow_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.resetFeatures">reset_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.resetGarbageCollectionSchedule">reset_garbage_collection_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_features` <a name="put_features" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putFeatures"></a>

```python
def put_features(
  vulnerability_scanning: bool | IResolvable = None
) -> None
```

###### `vulnerability_scanning`<sup>Optional</sup> <a name="vulnerability_scanning" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putFeatures.parameter.vulnerabilityScanning"></a>

- *Type:* bool | cdktf.IResolvable

Enables vulnerability scanning for images in the container registry. Note: this feature can incur additional charges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#vulnerability_scanning ContainerRegistry#vulnerability_scanning}

---

##### `put_garbage_collection_schedule` <a name="put_garbage_collection_schedule" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putGarbageCollectionSchedule"></a>

```python
def put_garbage_collection_schedule(
  days: typing.List[str],
  time: str
) -> None
```

###### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putGarbageCollectionSchedule.parameter.days"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#days ContainerRegistry#days}.

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putGarbageCollectionSchedule.parameter.time"></a>

- *Type:* str

UTC time of day e.g. 01:00:00 - as defined by partial-time - RFC3339.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#time ContainerRegistry#time}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#create ContainerRegistry#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#default ContainerRegistry#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#delete ContainerRegistry#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#update ContainerRegistry#update}.

---

##### `reset_api_subnet_allow_list` <a name="reset_api_subnet_allow_list" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.resetApiSubnetAllowList"></a>

```python
def reset_api_subnet_allow_list() -> None
```

##### `reset_features` <a name="reset_features" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.resetFeatures"></a>

```python
def reset_features() -> None
```

##### `reset_garbage_collection_schedule` <a name="reset_garbage_collection_schedule" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.resetGarbageCollectionSchedule"></a>

```python
def reset_garbage_collection_schedule() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerRegistry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistry.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerRegistry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerRegistry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.features">features</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference">ContainerRegistryFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.garbageCollectionSchedule">garbage_collection_schedule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference">ContainerRegistryGarbageCollectionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.storageUsage">storage_usage</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList">ContainerRegistryStorageUsageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference">ContainerRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.apiSubnetAllowListInput">api_subnet_allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.featuresInput">features_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeatures">ContainerRegistryFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.garbageCollectionScheduleInput">garbage_collection_schedule_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule">ContainerRegistryGarbageCollectionSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.apiSubnetAllowList">api_subnet_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.features"></a>

```python
features: ContainerRegistryFeaturesOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference">ContainerRegistryFeaturesOutputReference</a>

---

##### `garbage_collection_schedule`<sup>Required</sup> <a name="garbage_collection_schedule" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.garbageCollectionSchedule"></a>

```python
garbage_collection_schedule: ContainerRegistryGarbageCollectionScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference">ContainerRegistryGarbageCollectionScheduleOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `storage_usage`<sup>Required</sup> <a name="storage_usage" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.storageUsage"></a>

```python
storage_usage: ContainerRegistryStorageUsageList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList">ContainerRegistryStorageUsageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.timeouts"></a>

```python
timeouts: ContainerRegistryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference">ContainerRegistryTimeoutsOutputReference</a>

---

##### `api_subnet_allow_list_input`<sup>Optional</sup> <a name="api_subnet_allow_list_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.apiSubnetAllowListInput"></a>

```python
api_subnet_allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `features_input`<sup>Optional</sup> <a name="features_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.featuresInput"></a>

```python
features_input: ContainerRegistryFeatures
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeatures">ContainerRegistryFeatures</a>

---

##### `garbage_collection_schedule_input`<sup>Optional</sup> <a name="garbage_collection_schedule_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.garbageCollectionScheduleInput"></a>

```python
garbage_collection_schedule_input: ContainerRegistryGarbageCollectionSchedule
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule">ContainerRegistryGarbageCollectionSchedule</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ContainerRegistryTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

---

##### `api_subnet_allow_list`<sup>Required</sup> <a name="api_subnet_allow_list" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.apiSubnetAllowList"></a>

```python
api_subnet_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryConfig <a name="ContainerRegistryConfig" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  api_subnet_allow_list: typing.List[str] = None,
  features: ContainerRegistryFeatures = None,
  garbage_collection_schedule: ContainerRegistryGarbageCollectionSchedule = None,
  id: str = None,
  timeouts: ContainerRegistryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#location ContainerRegistry#location}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#name ContainerRegistry#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.apiSubnetAllowList">api_subnet_allow_list</a></code> | <code>typing.List[str]</code> | The subnet CIDRs that are allowed to connect to the registry. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.features">features</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeatures">ContainerRegistryFeatures</a></code> | features block. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.garbageCollectionSchedule">garbage_collection_schedule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule">ContainerRegistryGarbageCollectionSchedule</a></code> | garbage_collection_schedule block. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#id ContainerRegistry#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#location ContainerRegistry#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#name ContainerRegistry#name}.

---

##### `api_subnet_allow_list`<sup>Optional</sup> <a name="api_subnet_allow_list" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.apiSubnetAllowList"></a>

```python
api_subnet_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

The subnet CIDRs that are allowed to connect to the registry.

Specify 'a.b.c.d/32' for an individual IP address. **Note**: If this list is empty or not set, there are no restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#api_subnet_allow_list ContainerRegistry#api_subnet_allow_list}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.features"></a>

```python
features: ContainerRegistryFeatures
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeatures">ContainerRegistryFeatures</a>

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#features ContainerRegistry#features}

---

##### `garbage_collection_schedule`<sup>Optional</sup> <a name="garbage_collection_schedule" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.garbageCollectionSchedule"></a>

```python
garbage_collection_schedule: ContainerRegistryGarbageCollectionSchedule
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule">ContainerRegistryGarbageCollectionSchedule</a>

garbage_collection_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#garbage_collection_schedule ContainerRegistry#garbage_collection_schedule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#id ContainerRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryConfig.property.timeouts"></a>

```python
timeouts: ContainerRegistryTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#timeouts ContainerRegistry#timeouts}

---

### ContainerRegistryFeatures <a name="ContainerRegistryFeatures" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistryFeatures(
  vulnerability_scanning: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeatures.property.vulnerabilityScanning">vulnerability_scanning</a></code> | <code>bool \| cdktf.IResolvable</code> | Enables vulnerability scanning for images in the container registry. Note: this feature can incur additional charges. |

---

##### `vulnerability_scanning`<sup>Optional</sup> <a name="vulnerability_scanning" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeatures.property.vulnerabilityScanning"></a>

```python
vulnerability_scanning: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enables vulnerability scanning for images in the container registry. Note: this feature can incur additional charges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#vulnerability_scanning ContainerRegistry#vulnerability_scanning}

---

### ContainerRegistryGarbageCollectionSchedule <a name="ContainerRegistryGarbageCollectionSchedule" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistryGarbageCollectionSchedule(
  days: typing.List[str],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule.property.days">days</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#days ContainerRegistry#days}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule.property.time">time</a></code> | <code>str</code> | UTC time of day e.g. 01:00:00 - as defined by partial-time - RFC3339. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule.property.days"></a>

```python
days: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#days ContainerRegistry#days}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule.property.time"></a>

```python
time: str
```

- *Type:* str

UTC time of day e.g. 01:00:00 - as defined by partial-time - RFC3339.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#time ContainerRegistry#time}

---

### ContainerRegistryStorageUsage <a name="ContainerRegistryStorageUsage" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsage.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistryStorageUsage()
```


### ContainerRegistryTimeouts <a name="ContainerRegistryTimeouts" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistryTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#create ContainerRegistry#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#default ContainerRegistry#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#delete ContainerRegistry#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#update ContainerRegistry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#create ContainerRegistry#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#default ContainerRegistry#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#delete ContainerRegistry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/container_registry#update ContainerRegistry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryFeaturesOutputReference <a name="ContainerRegistryFeaturesOutputReference" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistryFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.resetVulnerabilityScanning">reset_vulnerability_scanning</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vulnerability_scanning` <a name="reset_vulnerability_scanning" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.resetVulnerabilityScanning"></a>

```python
def reset_vulnerability_scanning() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.property.vulnerabilityScanningInput">vulnerability_scanning_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.property.vulnerabilityScanning">vulnerability_scanning</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeatures">ContainerRegistryFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vulnerability_scanning_input`<sup>Optional</sup> <a name="vulnerability_scanning_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.property.vulnerabilityScanningInput"></a>

```python
vulnerability_scanning_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `vulnerability_scanning`<sup>Required</sup> <a name="vulnerability_scanning" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.property.vulnerabilityScanning"></a>

```python
vulnerability_scanning: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryFeatures
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryFeatures">ContainerRegistryFeatures</a>

---


### ContainerRegistryGarbageCollectionScheduleOutputReference <a name="ContainerRegistryGarbageCollectionScheduleOutputReference" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.daysInput">days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.days">days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule">ContainerRegistryGarbageCollectionSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.daysInput"></a>

```python
days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.days"></a>

```python
days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionScheduleOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryGarbageCollectionSchedule
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryGarbageCollectionSchedule">ContainerRegistryGarbageCollectionSchedule</a>

---


### ContainerRegistryStorageUsageList <a name="ContainerRegistryStorageUsageList" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistryStorageUsageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerRegistryStorageUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ContainerRegistryStorageUsageOutputReference <a name="ContainerRegistryStorageUsageOutputReference" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistryStorageUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.property.bytes">bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsage">ContainerRegistryStorageUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.property.bytes"></a>

```python
bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsageOutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryStorageUsage
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryStorageUsage">ContainerRegistryStorageUsage</a>

---


### ContainerRegistryTimeoutsOutputReference <a name="ContainerRegistryTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import container_registry

containerRegistry.ContainerRegistryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ContainerRegistryTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

---



