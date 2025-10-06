# `cdnDistribution` Submodule <a name="`cdnDistribution` Submodule" id="@cdktf/provider-ionoscloud.cdnDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnDistribution <a name="CdnDistribution" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution ionoscloud_cdn_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistribution(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain: str,
  routing_rules: IResolvable | typing.List[CdnDistributionRoutingRules],
  certificate_id: str = None,
  id: str = None,
  timeouts: CdnDistributionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.domain">domain</a></code> | <code>str</code> | The domain of the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.routingRules">routing_rules</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>]</code> | routing_rules block. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.certificateId">certificate_id</a></code> | <code>str</code> | The ID of the certificate to use for the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#id CdnDistribution#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.domain"></a>

- *Type:* str

The domain of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#domain CdnDistribution#domain}

---

##### `routing_rules`<sup>Required</sup> <a name="routing_rules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.routingRules"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>]

routing_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#routing_rules CdnDistribution#routing_rules}

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.certificateId"></a>

- *Type:* str

The ID of the certificate to use for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#certificate_id CdnDistribution#certificate_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#id CdnDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#timeouts CdnDistribution#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putRoutingRules">put_routing_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetCertificateId">reset_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_routing_rules` <a name="put_routing_rules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putRoutingRules"></a>

```python
def put_routing_rules(
  value: IResolvable | typing.List[CdnDistributionRoutingRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putRoutingRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#create CdnDistribution#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#default CdnDistribution#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#delete CdnDistribution#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#update CdnDistribution#update}.

---

##### `reset_certificate_id` <a name="reset_certificate_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CdnDistribution resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistribution.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistribution.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistribution.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistribution.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CdnDistribution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CdnDistribution to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CdnDistribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CdnDistribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV4">public_endpoint_v4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV6">public_endpoint_v6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.resourceUrn">resource_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRules">routing_rules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList">CdnDistributionRoutingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference">CdnDistributionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRulesInput">routing_rules_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `public_endpoint_v4`<sup>Required</sup> <a name="public_endpoint_v4" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV4"></a>

```python
public_endpoint_v4: str
```

- *Type:* str

---

##### `public_endpoint_v6`<sup>Required</sup> <a name="public_endpoint_v6" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV6"></a>

```python
public_endpoint_v6: str
```

- *Type:* str

---

##### `resource_urn`<sup>Required</sup> <a name="resource_urn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.resourceUrn"></a>

```python
resource_urn: str
```

- *Type:* str

---

##### `routing_rules`<sup>Required</sup> <a name="routing_rules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRules"></a>

```python
routing_rules: CdnDistributionRoutingRulesList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList">CdnDistributionRoutingRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeouts"></a>

```python
timeouts: CdnDistributionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference">CdnDistributionTimeoutsOutputReference</a>

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `routing_rules_input`<sup>Optional</sup> <a name="routing_rules_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRulesInput"></a>

```python
routing_rules_input: IResolvable | typing.List[CdnDistributionRoutingRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CdnDistributionTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a>

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CdnDistributionConfig <a name="CdnDistributionConfig" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistributionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain: str,
  routing_rules: IResolvable | typing.List[CdnDistributionRoutingRules],
  certificate_id: str = None,
  id: str = None,
  timeouts: CdnDistributionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.domain">domain</a></code> | <code>str</code> | The domain of the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.routingRules">routing_rules</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>]</code> | routing_rules block. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.certificateId">certificate_id</a></code> | <code>str</code> | The ID of the certificate to use for the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#id CdnDistribution#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

The domain of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#domain CdnDistribution#domain}

---

##### `routing_rules`<sup>Required</sup> <a name="routing_rules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.routingRules"></a>

```python
routing_rules: IResolvable | typing.List[CdnDistributionRoutingRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>]

routing_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#routing_rules CdnDistribution#routing_rules}

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

The ID of the certificate to use for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#certificate_id CdnDistribution#certificate_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#id CdnDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.timeouts"></a>

```python
timeouts: CdnDistributionTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#timeouts CdnDistribution#timeouts}

---

### CdnDistributionRoutingRules <a name="CdnDistributionRoutingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistributionRoutingRules(
  prefix: str,
  scheme: str,
  upstream: CdnDistributionRoutingRulesUpstream
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.prefix">prefix</a></code> | <code>str</code> | The prefix of the routing rule. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.scheme">scheme</a></code> | <code>str</code> | The scheme of the routing rule. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.upstream">upstream</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a></code> | upstream block. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The prefix of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#prefix CdnDistribution#prefix}

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

The scheme of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#scheme CdnDistribution#scheme}

---

##### `upstream`<sup>Required</sup> <a name="upstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.upstream"></a>

```python
upstream: CdnDistributionRoutingRulesUpstream
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

upstream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#upstream CdnDistribution#upstream}

---

### CdnDistributionRoutingRulesUpstream <a name="CdnDistributionRoutingRulesUpstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistributionRoutingRulesUpstream(
  caching: bool | IResolvable,
  host: str,
  rate_limit_class: str,
  sni_mode: str,
  waf: bool | IResolvable,
  geo_restrictions: CdnDistributionRoutingRulesUpstreamGeoRestrictions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.caching">caching</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable or disable caching. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.host">host</a></code> | <code>str</code> | The upstream host that handles the requests if not already cached. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.rateLimitClass">rate_limit_class</a></code> | <code>str</code> | Rate limit class that will be applied to limit the number of incoming requests per IP. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.sniMode">sni_mode</a></code> | <code>str</code> | The SNI (Server Name Indication) mode of the upstream host. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.waf">waf</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable or disable WAF to protect the upstream host. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.geoRestrictions">geo_restrictions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | geo_restrictions block. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.caching"></a>

```python
caching: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable or disable caching.

If enabled, the CDN will cache the responses from the upstream host. Subsequent requests for the same resource will be served from the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#caching CdnDistribution#caching}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.host"></a>

```python
host: str
```

- *Type:* str

The upstream host that handles the requests if not already cached.

This host will be protected by the WAF if the option is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#host CdnDistribution#host}

---

##### `rate_limit_class`<sup>Required</sup> <a name="rate_limit_class" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.rateLimitClass"></a>

```python
rate_limit_class: str
```

- *Type:* str

Rate limit class that will be applied to limit the number of incoming requests per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#rate_limit_class CdnDistribution#rate_limit_class}

---

##### `sni_mode`<sup>Required</sup> <a name="sni_mode" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.sniMode"></a>

```python
sni_mode: str
```

- *Type:* str

The SNI (Server Name Indication) mode of the upstream host.

It supports two modes: 'distribution' and 'origin', for more information about these modes please check the resource docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#sni_mode CdnDistribution#sni_mode}

---

##### `waf`<sup>Required</sup> <a name="waf" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.waf"></a>

```python
waf: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable or disable WAF to protect the upstream host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#waf CdnDistribution#waf}

---

##### `geo_restrictions`<sup>Optional</sup> <a name="geo_restrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.geoRestrictions"></a>

```python
geo_restrictions: CdnDistributionRoutingRulesUpstreamGeoRestrictions
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

geo_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#geo_restrictions CdnDistribution#geo_restrictions}

---

### CdnDistributionRoutingRulesUpstreamGeoRestrictions <a name="CdnDistributionRoutingRulesUpstreamGeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions(
  allow_list: typing.List[str] = None,
  block_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.allowList">allow_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#allow_list CdnDistribution#allow_list}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.blockList">block_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#block_list CdnDistribution#block_list}. |

---

##### `allow_list`<sup>Optional</sup> <a name="allow_list" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.allowList"></a>

```python
allow_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#allow_list CdnDistribution#allow_list}.

---

##### `block_list`<sup>Optional</sup> <a name="block_list" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.blockList"></a>

```python
block_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#block_list CdnDistribution#block_list}.

---

### CdnDistributionTimeouts <a name="CdnDistributionTimeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistributionTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#create CdnDistribution#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#default CdnDistribution#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#delete CdnDistribution#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#update CdnDistribution#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#create CdnDistribution#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#default CdnDistribution#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#delete CdnDistribution#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#update CdnDistribution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnDistributionRoutingRulesList <a name="CdnDistributionRoutingRulesList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistributionRoutingRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CdnDistributionRoutingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CdnDistributionRoutingRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>]

---


### CdnDistributionRoutingRulesOutputReference <a name="CdnDistributionRoutingRulesOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistributionRoutingRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream">put_upstream</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_upstream` <a name="put_upstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream"></a>

```python
def put_upstream(
  caching: bool | IResolvable,
  host: str,
  rate_limit_class: str,
  sni_mode: str,
  waf: bool | IResolvable,
  geo_restrictions: CdnDistributionRoutingRulesUpstreamGeoRestrictions = None
) -> None
```

###### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream.parameter.caching"></a>

- *Type:* bool | cdktf.IResolvable

Enable or disable caching.

If enabled, the CDN will cache the responses from the upstream host. Subsequent requests for the same resource will be served from the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#caching CdnDistribution#caching}

---

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream.parameter.host"></a>

- *Type:* str

The upstream host that handles the requests if not already cached.

This host will be protected by the WAF if the option is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#host CdnDistribution#host}

---

###### `rate_limit_class`<sup>Required</sup> <a name="rate_limit_class" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream.parameter.rateLimitClass"></a>

- *Type:* str

Rate limit class that will be applied to limit the number of incoming requests per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#rate_limit_class CdnDistribution#rate_limit_class}

---

###### `sni_mode`<sup>Required</sup> <a name="sni_mode" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream.parameter.sniMode"></a>

- *Type:* str

The SNI (Server Name Indication) mode of the upstream host.

It supports two modes: 'distribution' and 'origin', for more information about these modes please check the resource docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#sni_mode CdnDistribution#sni_mode}

---

###### `waf`<sup>Required</sup> <a name="waf" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream.parameter.waf"></a>

- *Type:* bool | cdktf.IResolvable

Enable or disable WAF to protect the upstream host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#waf CdnDistribution#waf}

---

###### `geo_restrictions`<sup>Optional</sup> <a name="geo_restrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream.parameter.geoRestrictions"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

geo_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#geo_restrictions CdnDistribution#geo_restrictions}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstream">upstream</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference">CdnDistributionRoutingRulesUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstreamInput">upstream_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `upstream`<sup>Required</sup> <a name="upstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstream"></a>

```python
upstream: CdnDistributionRoutingRulesUpstreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference">CdnDistributionRoutingRulesUpstreamOutputReference</a>

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `upstream_input`<sup>Optional</sup> <a name="upstream_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstreamInput"></a>

```python
upstream_input: CdnDistributionRoutingRulesUpstream
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CdnDistributionRoutingRules
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>

---


### CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference <a name="CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetAllowList">reset_allow_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetBlockList">reset_block_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_list` <a name="reset_allow_list" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetAllowList"></a>

```python
def reset_allow_list() -> None
```

##### `reset_block_list` <a name="reset_block_list" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetBlockList"></a>

```python
def reset_block_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowListInput">allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockListInput">block_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList">allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList">block_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_list_input`<sup>Optional</sup> <a name="allow_list_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowListInput"></a>

```python
allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `block_list_input`<sup>Optional</sup> <a name="block_list_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockListInput"></a>

```python
block_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_list`<sup>Required</sup> <a name="allow_list" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList"></a>

```python
allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `block_list`<sup>Required</sup> <a name="block_list" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList"></a>

```python
block_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: CdnDistributionRoutingRulesUpstreamGeoRestrictions
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---


### CdnDistributionRoutingRulesUpstreamOutputReference <a name="CdnDistributionRoutingRulesUpstreamOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions">put_geo_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resetGeoRestrictions">reset_geo_restrictions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_geo_restrictions` <a name="put_geo_restrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions"></a>

```python
def put_geo_restrictions(
  allow_list: typing.List[str] = None,
  block_list: typing.List[str] = None
) -> None
```

###### `allow_list`<sup>Optional</sup> <a name="allow_list" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions.parameter.allowList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#allow_list CdnDistribution#allow_list}.

---

###### `block_list`<sup>Optional</sup> <a name="block_list" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions.parameter.blockList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/cdn_distribution#block_list CdnDistribution#block_list}.

---

##### `reset_geo_restrictions` <a name="reset_geo_restrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resetGeoRestrictions"></a>

```python
def reset_geo_restrictions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions">geo_restrictions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference">CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.cachingInput">caching_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictionsInput">geo_restrictions_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClassInput">rate_limit_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniModeInput">sni_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.wafInput">waf_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.caching">caching</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass">rate_limit_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniMode">sni_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.waf">waf</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `geo_restrictions`<sup>Required</sup> <a name="geo_restrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions"></a>

```python
geo_restrictions: CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference">CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference</a>

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.cachingInput"></a>

```python
caching_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `geo_restrictions_input`<sup>Optional</sup> <a name="geo_restrictions_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictionsInput"></a>

```python
geo_restrictions_input: CdnDistributionRoutingRulesUpstreamGeoRestrictions
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `rate_limit_class_input`<sup>Optional</sup> <a name="rate_limit_class_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClassInput"></a>

```python
rate_limit_class_input: str
```

- *Type:* str

---

##### `sni_mode_input`<sup>Optional</sup> <a name="sni_mode_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniModeInput"></a>

```python
sni_mode_input: str
```

- *Type:* str

---

##### `waf_input`<sup>Optional</sup> <a name="waf_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.wafInput"></a>

```python
waf_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.caching"></a>

```python
caching: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `rate_limit_class`<sup>Required</sup> <a name="rate_limit_class" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass"></a>

```python
rate_limit_class: str
```

- *Type:* str

---

##### `sni_mode`<sup>Required</sup> <a name="sni_mode" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniMode"></a>

```python
sni_mode: str
```

- *Type:* str

---

##### `waf`<sup>Required</sup> <a name="waf" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.waf"></a>

```python
waf: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue"></a>

```python
internal_value: CdnDistributionRoutingRulesUpstream
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

---


### CdnDistributionTimeoutsOutputReference <a name="CdnDistributionTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import cdn_distribution

cdnDistribution.CdnDistributionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CdnDistributionTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a>

---



