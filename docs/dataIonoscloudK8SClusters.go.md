# `dataIonoscloudK8SClusters` Submodule <a name="`dataIonoscloudK8SClusters` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudK8SClusters <a name="DataIonoscloudK8SClusters" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters ionoscloud_k8s_clusters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClusters(scope Construct, id *string, config DataIonoscloudK8SClustersConfig) DataIonoscloudK8SClusters
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig">DataIonoscloudK8SClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig">DataIonoscloudK8SClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.putTimeouts"></a>

```go
func PutTimeouts(value DataIonoscloudK8SClustersTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts">DataIonoscloudK8SClustersTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudK8SClusters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.DataIonoscloudK8SClusters_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.DataIonoscloudK8SClusters_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.DataIonoscloudK8SClusters_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.DataIonoscloudK8SClusters_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataIonoscloudK8SClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataIonoscloudK8SClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataIonoscloudK8SClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudK8SClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.clusters">Clusters</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList">DataIonoscloudK8SClustersClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.entries">Entries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList">DataIonoscloudK8SClustersFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference">DataIonoscloudK8SClustersTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Clusters`<sup>Required</sup> <a name="Clusters" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.clusters"></a>

```go
func Clusters() DataIonoscloudK8SClustersClustersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList">DataIonoscloudK8SClustersClustersList</a>

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.entries"></a>

```go
func Entries() *f64
```

- *Type:* *f64

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.filter"></a>

```go
func Filter() DataIonoscloudK8SClustersFilterList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList">DataIonoscloudK8SClustersFilterList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.timeouts"></a>

```go
func Timeouts() DataIonoscloudK8SClustersTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference">DataIonoscloudK8SClustersTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClusters.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudK8SClustersClusters <a name="DataIonoscloudK8SClustersClusters" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClusters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

&dataionoscloudk8sclusters.DataIonoscloudK8SClustersClusters {

}
```


### DataIonoscloudK8SClustersClustersConfig <a name="DataIonoscloudK8SClustersClustersConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

&dataionoscloudk8sclusters.DataIonoscloudK8SClustersClustersConfig {

}
```


### DataIonoscloudK8SClustersClustersConfigClusters <a name="DataIonoscloudK8SClustersClustersConfigClusters" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClusters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

&dataionoscloudk8sclusters.DataIonoscloudK8SClustersClustersConfigClusters {

}
```


### DataIonoscloudK8SClustersClustersConfigContexts <a name="DataIonoscloudK8SClustersClustersConfigContexts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContexts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContexts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

&dataionoscloudk8sclusters.DataIonoscloudK8SClustersClustersConfigContexts {

}
```


### DataIonoscloudK8SClustersClustersConfigUsers <a name="DataIonoscloudK8SClustersClustersConfigUsers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

&dataionoscloudk8sclusters.DataIonoscloudK8SClustersClustersConfigUsers {

}
```


### DataIonoscloudK8SClustersClustersMaintenanceWindow <a name="DataIonoscloudK8SClustersClustersMaintenanceWindow" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

&dataionoscloudk8sclusters.DataIonoscloudK8SClustersClustersMaintenanceWindow {

}
```


### DataIonoscloudK8SClustersClustersS3Buckets <a name="DataIonoscloudK8SClustersClustersS3Buckets" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3Buckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3Buckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

&dataionoscloudk8sclusters.DataIonoscloudK8SClustersClustersS3Buckets {

}
```


### DataIonoscloudK8SClustersConfig <a name="DataIonoscloudK8SClustersConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

&dataionoscloudk8sclusters.DataIonoscloudK8SClustersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#id DataIonoscloudK8SClusters#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts">DataIonoscloudK8SClustersTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#filter DataIonoscloudK8SClusters#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#id DataIonoscloudK8SClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersConfig.property.timeouts"></a>

```go
Timeouts DataIonoscloudK8SClustersTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts">DataIonoscloudK8SClustersTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#timeouts DataIonoscloudK8SClusters#timeouts}

---

### DataIonoscloudK8SClustersFilter <a name="DataIonoscloudK8SClustersFilter" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

&dataionoscloudk8sclusters.DataIonoscloudK8SClustersFilter {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#name DataIonoscloudK8SClusters#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#value DataIonoscloudK8SClusters#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#name DataIonoscloudK8SClusters#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#value DataIonoscloudK8SClusters#value}.

---

### DataIonoscloudK8SClustersTimeouts <a name="DataIonoscloudK8SClustersTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

&dataionoscloudk8sclusters.DataIonoscloudK8SClustersTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#create DataIonoscloudK8SClusters#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#default DataIonoscloudK8SClusters#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#delete DataIonoscloudK8SClusters#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#update DataIonoscloudK8SClusters#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#create DataIonoscloudK8SClusters#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#default DataIonoscloudK8SClusters#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#delete DataIonoscloudK8SClusters#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/k8s_clusters#update DataIonoscloudK8SClusters#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudK8SClustersClustersConfigClustersList <a name="DataIonoscloudK8SClustersClustersConfigClustersList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersConfigClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudK8SClustersClustersConfigClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.get"></a>

```go
func Get(index *f64) DataIonoscloudK8SClustersClustersConfigClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataIonoscloudK8SClustersClustersConfigClustersOutputReference <a name="DataIonoscloudK8SClustersClustersConfigClustersOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersConfigClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudK8SClustersClustersConfigClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.property.cluster">Cluster</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClusters">DataIonoscloudK8SClustersClustersConfigClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.property.cluster"></a>

```go
func Cluster() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudK8SClustersClustersConfigClusters
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClusters">DataIonoscloudK8SClustersClustersConfigClusters</a>

---


### DataIonoscloudK8SClustersClustersConfigContextsList <a name="DataIonoscloudK8SClustersClustersConfigContextsList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersConfigContextsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudK8SClustersClustersConfigContextsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.get"></a>

```go
func Get(index *f64) DataIonoscloudK8SClustersClustersConfigContextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataIonoscloudK8SClustersClustersConfigContextsOutputReference <a name="DataIonoscloudK8SClustersClustersConfigContextsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersConfigContextsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudK8SClustersClustersConfigContextsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.property.context">Context</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContexts">DataIonoscloudK8SClustersClustersConfigContexts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.property.context"></a>

```go
func Context() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudK8SClustersClustersConfigContexts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContexts">DataIonoscloudK8SClustersClustersConfigContexts</a>

---


### DataIonoscloudK8SClustersClustersConfigList <a name="DataIonoscloudK8SClustersClustersConfigList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudK8SClustersClustersConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.get"></a>

```go
func Get(index *f64) DataIonoscloudK8SClustersClustersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataIonoscloudK8SClustersClustersConfigOutputReference <a name="DataIonoscloudK8SClustersClustersConfigOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudK8SClustersClustersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.clusters">Clusters</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList">DataIonoscloudK8SClustersClustersConfigClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.contexts">Contexts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList">DataIonoscloudK8SClustersClustersConfigContextsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.currentContext">CurrentContext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.users">Users</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList">DataIonoscloudK8SClustersClustersConfigUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfig">DataIonoscloudK8SClustersClustersConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.apiVersion"></a>

```go
func ApiVersion() *string
```

- *Type:* *string

---

##### `Clusters`<sup>Required</sup> <a name="Clusters" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.clusters"></a>

```go
func Clusters() DataIonoscloudK8SClustersClustersConfigClustersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigClustersList">DataIonoscloudK8SClustersClustersConfigClustersList</a>

---

##### `Contexts`<sup>Required</sup> <a name="Contexts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.contexts"></a>

```go
func Contexts() DataIonoscloudK8SClustersClustersConfigContextsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigContextsList">DataIonoscloudK8SClustersClustersConfigContextsList</a>

---

##### `CurrentContext`<sup>Required</sup> <a name="CurrentContext" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.currentContext"></a>

```go
func CurrentContext() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.users"></a>

```go
func Users() DataIonoscloudK8SClustersClustersConfigUsersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList">DataIonoscloudK8SClustersClustersConfigUsersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudK8SClustersClustersConfig
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfig">DataIonoscloudK8SClustersClustersConfig</a>

---


### DataIonoscloudK8SClustersClustersConfigUsersList <a name="DataIonoscloudK8SClustersClustersConfigUsersList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersConfigUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudK8SClustersClustersConfigUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.get"></a>

```go
func Get(index *f64) DataIonoscloudK8SClustersClustersConfigUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataIonoscloudK8SClustersClustersConfigUsersOutputReference <a name="DataIonoscloudK8SClustersClustersConfigUsersOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersConfigUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudK8SClustersClustersConfigUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.property.user">User</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsers">DataIonoscloudK8SClustersClustersConfigUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.property.user"></a>

```go
func User() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudK8SClustersClustersConfigUsers
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigUsers">DataIonoscloudK8SClustersClustersConfigUsers</a>

---


### DataIonoscloudK8SClustersClustersList <a name="DataIonoscloudK8SClustersClustersList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudK8SClustersClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.get"></a>

```go
func Get(index *f64) DataIonoscloudK8SClustersClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataIonoscloudK8SClustersClustersMaintenanceWindowList <a name="DataIonoscloudK8SClustersClustersMaintenanceWindowList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersMaintenanceWindowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudK8SClustersClustersMaintenanceWindowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.get"></a>

```go
func Get(index *f64) DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference <a name="DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindow">DataIonoscloudK8SClustersClustersMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```go
func DayOfTheWeek() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudK8SClustersClustersMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindow">DataIonoscloudK8SClustersClustersMaintenanceWindow</a>

---


### DataIonoscloudK8SClustersClustersOutputReference <a name="DataIonoscloudK8SClustersClustersOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudK8SClustersClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.apiSubnetAllowList">ApiSubnetAllowList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.caCrt">CaCrt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList">DataIonoscloudK8SClustersClustersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.k8SVersion">K8SVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.kubeConfig">KubeConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList">DataIonoscloudK8SClustersClustersMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.natGatewayIp">NatGatewayIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.nodePools">NodePools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.nodeSubnet">NodeSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.public">Public</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.s3Buckets">S3Buckets</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList">DataIonoscloudK8SClustersClustersS3BucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.userTokens">UserTokens</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.viableNodePoolVersions">ViableNodePoolVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClusters">DataIonoscloudK8SClustersClusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiSubnetAllowList`<sup>Required</sup> <a name="ApiSubnetAllowList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.apiSubnetAllowList"></a>

```go
func ApiSubnetAllowList() *[]*string
```

- *Type:* *[]*string

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.availableUpgradeVersions"></a>

```go
func AvailableUpgradeVersions() *[]*string
```

- *Type:* *[]*string

---

##### `CaCrt`<sup>Required</sup> <a name="CaCrt" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.caCrt"></a>

```go
func CaCrt() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.config"></a>

```go
func Config() DataIonoscloudK8SClustersClustersConfigList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersConfigList">DataIonoscloudK8SClustersClustersConfigList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `K8SVersion`<sup>Required</sup> <a name="K8SVersion" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.k8SVersion"></a>

```go
func K8SVersion() *string
```

- *Type:* *string

---

##### `KubeConfig`<sup>Required</sup> <a name="KubeConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.kubeConfig"></a>

```go
func KubeConfig() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() DataIonoscloudK8SClustersClustersMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersMaintenanceWindowList">DataIonoscloudK8SClustersClustersMaintenanceWindowList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NatGatewayIp`<sup>Required</sup> <a name="NatGatewayIp" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.natGatewayIp"></a>

```go
func NatGatewayIp() *string
```

- *Type:* *string

---

##### `NodePools`<sup>Required</sup> <a name="NodePools" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.nodePools"></a>

```go
func NodePools() *[]*string
```

- *Type:* *[]*string

---

##### `NodeSubnet`<sup>Required</sup> <a name="NodeSubnet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.nodeSubnet"></a>

```go
func NodeSubnet() *string
```

- *Type:* *string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.public"></a>

```go
func Public() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `S3Buckets`<sup>Required</sup> <a name="S3Buckets" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.s3Buckets"></a>

```go
func S3Buckets() DataIonoscloudK8SClustersClustersS3BucketsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList">DataIonoscloudK8SClustersClustersS3BucketsList</a>

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UserTokens`<sup>Required</sup> <a name="UserTokens" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.userTokens"></a>

```go
func UserTokens() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ViableNodePoolVersions`<sup>Required</sup> <a name="ViableNodePoolVersions" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.viableNodePoolVersions"></a>

```go
func ViableNodePoolVersions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudK8SClustersClusters
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClusters">DataIonoscloudK8SClustersClusters</a>

---


### DataIonoscloudK8SClustersClustersS3BucketsList <a name="DataIonoscloudK8SClustersClustersS3BucketsList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersS3BucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudK8SClustersClustersS3BucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.get"></a>

```go
func Get(index *f64) DataIonoscloudK8SClustersClustersS3BucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataIonoscloudK8SClustersClustersS3BucketsOutputReference <a name="DataIonoscloudK8SClustersClustersS3BucketsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersClustersS3BucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudK8SClustersClustersS3BucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3Buckets">DataIonoscloudK8SClustersClustersS3Buckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3BucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataIonoscloudK8SClustersClustersS3Buckets
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersClustersS3Buckets">DataIonoscloudK8SClustersClustersS3Buckets</a>

---


### DataIonoscloudK8SClustersFilterList <a name="DataIonoscloudK8SClustersFilterList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataIonoscloudK8SClustersFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.get"></a>

```go
func Get(index *f64) DataIonoscloudK8SClustersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataIonoscloudK8SClustersFilterOutputReference <a name="DataIonoscloudK8SClustersFilterOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataIonoscloudK8SClustersFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataIonoscloudK8SClustersTimeoutsOutputReference <a name="DataIonoscloudK8SClustersTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/dataionoscloudk8sclusters"

dataionoscloudk8sclusters.NewDataIonoscloudK8SClustersTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataIonoscloudK8SClustersTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SClusters.DataIonoscloudK8SClustersTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



