# `dataIonoscloudK8SNodePoolNodes` Submodule <a name="`dataIonoscloudK8SNodePoolNodes` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudK8SNodePoolNodes <a name="DataIonoscloudK8SNodePoolNodes" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes ionoscloud_k8s_node_pool_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudk8snodepoolnodes"

dataionoscloudk8snodepoolnodes.NewDataIonoscloudK8SNodePoolNodes(scope Construct, id *string, config DataIonoscloudK8SNodePoolNodesConfig) DataIonoscloudK8SNodePoolNodes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig">DataIonoscloudK8SNodePoolNodesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig">DataIonoscloudK8SNodePoolNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.putTimeouts"></a>

```go
func PutTimeouts(value DataIonoscloudK8SNodePoolNodesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts">DataIonoscloudK8SNodePoolNodesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudK8SNodePoolNodes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudk8snodepoolnodes"

dataionoscloudk8snodepoolnodes.DataIonoscloudK8SNodePoolNodes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudk8snodepoolnodes"

dataionoscloudk8snodepoolnodes.DataIonoscloudK8SNodePoolNodes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudk8snodepoolnodes"

dataionoscloudk8snodepoolnodes.DataIonoscloudK8SNodePoolNodes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudk8snodepoolnodes"

dataionoscloudk8snodepoolnodes.DataIonoscloudK8SNodePoolNodes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataIonoscloudK8SNodePoolNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataIonoscloudK8SNodePoolNodes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataIonoscloudK8SNodePoolNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudK8SNodePoolNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList">DataIonoscloudK8SNodePoolNodesNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference">DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.k8SClusterIdInput">K8SClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.nodePoolIdInput">NodePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.k8SClusterId">K8SClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.nodePoolId">NodePoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.nodes"></a>

```go
func Nodes() DataIonoscloudK8SNodePoolNodesNodesList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList">DataIonoscloudK8SNodePoolNodesNodesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.timeouts"></a>

```go
func Timeouts() DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference">DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `K8SClusterIdInput`<sup>Optional</sup> <a name="K8SClusterIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.k8SClusterIdInput"></a>

```go
func K8SClusterIdInput() *string
```

- *Type:* *string

---

##### `NodePoolIdInput`<sup>Optional</sup> <a name="NodePoolIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.nodePoolIdInput"></a>

```go
func NodePoolIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `K8SClusterId`<sup>Required</sup> <a name="K8SClusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.k8SClusterId"></a>

```go
func K8SClusterId() *string
```

- *Type:* *string

---

##### `NodePoolId`<sup>Required</sup> <a name="NodePoolId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.nodePoolId"></a>

```go
func NodePoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudK8SNodePoolNodesConfig <a name="DataIonoscloudK8SNodePoolNodesConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudk8snodepoolnodes"

&dataionoscloudk8snodepoolnodes.DataIonoscloudK8SNodePoolNodesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	K8SClusterId: *string,
	NodePoolId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.k8SClusterId">K8SClusterId</a></code> | <code>*string</code> | The UUID of an existing kubernetes cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.nodePoolId">NodePoolId</a></code> | <code>*string</code> | The UUID of an existing nodepool. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#id DataIonoscloudK8SNodePoolNodes#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts">DataIonoscloudK8SNodePoolNodesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `K8SClusterId`<sup>Required</sup> <a name="K8SClusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.k8SClusterId"></a>

```go
K8SClusterId *string
```

- *Type:* *string

The UUID of an existing kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#k8s_cluster_id DataIonoscloudK8SNodePoolNodes#k8s_cluster_id}

---

##### `NodePoolId`<sup>Required</sup> <a name="NodePoolId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.nodePoolId"></a>

```go
NodePoolId *string
```

- *Type:* *string

The UUID of an existing nodepool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#node_pool_id DataIonoscloudK8SNodePoolNodes#node_pool_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#id DataIonoscloudK8SNodePoolNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesConfig.property.timeouts"></a>

```go
Timeouts DataIonoscloudK8SNodePoolNodesTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts">DataIonoscloudK8SNodePoolNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#timeouts DataIonoscloudK8SNodePoolNodes#timeouts}

---

### DataIonoscloudK8SNodePoolNodesNodes <a name="DataIonoscloudK8SNodePoolNodesNodes" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudk8snodepoolnodes"

&dataionoscloudk8snodepoolnodes.DataIonoscloudK8SNodePoolNodesNodes {

}
```


### DataIonoscloudK8SNodePoolNodesTimeouts <a name="DataIonoscloudK8SNodePoolNodesTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudk8snodepoolnodes"

&dataionoscloudk8snodepoolnodes.DataIonoscloudK8SNodePoolNodesTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#create DataIonoscloudK8SNodePoolNodes#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#default DataIonoscloudK8SNodePoolNodes#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#delete DataIonoscloudK8SNodePoolNodes#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#update DataIonoscloudK8SNodePoolNodes#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#create DataIonoscloudK8SNodePoolNodes#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#default DataIonoscloudK8SNodePoolNodes#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#delete DataIonoscloudK8SNodePoolNodes#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/data-sources/k8s_node_pool_nodes#update DataIonoscloudK8SNodePoolNodes#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudK8SNodePoolNodesNodesList <a name="DataIonoscloudK8SNodePoolNodesNodesList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudk8snodepoolnodes"

dataionoscloudk8snodepoolnodes.NewDataIonoscloudK8SNodePoolNodesNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudK8SNodePoolNodesNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.get"></a>

```go
func Get(index *f64) DataIonoscloudK8SNodePoolNodesNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataIonoscloudK8SNodePoolNodesNodesOutputReference <a name="DataIonoscloudK8SNodePoolNodesNodesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudk8snodepoolnodes"

dataionoscloudk8snodepoolnodes.NewDataIonoscloudK8SNodePoolNodesNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudK8SNodePoolNodesNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.k8SVersion">K8SVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.publicIp">PublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodes">DataIonoscloudK8SNodePoolNodesNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `K8SVersion`<sup>Required</sup> <a name="K8SVersion" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.k8SVersion"></a>

```go
func K8SVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.publicIp"></a>

```go
func PublicIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudK8SNodePoolNodesNodes
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesNodes">DataIonoscloudK8SNodePoolNodesNodes</a>

---


### DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference <a name="DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/dataionoscloudk8snodepoolnodes"

dataionoscloudk8snodepoolnodes.NewDataIonoscloudK8SNodePoolNodesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePoolNodes.DataIonoscloudK8SNodePoolNodesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



